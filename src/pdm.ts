import { parseString as xmlparse } from 'xml2js'
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'
import * as _ from 'lodash'
import * as http from 'http'
import axios from 'axios'
export default class PDM {
    public _data = {};
    public _tables = {};
    public _IDMap = {};
    public _domain = {};
    public _json = {};
    public _dir = "./";
    parse(pdmPath, dir = './', callback: Function) {
        this.checkDir(dir)
        this._dir = path.join(dir,'src');
        var content = fs.readFileSync(pdmPath);
        xmlparse(content, (err, result) => {
            if (err === null) {
                this._json = result.Model["o:RootObject"]["0"]["c:Children"]["0"]["o:Model"]["0"];
                this.parse_domain();
                this.parse_fk();
                this.parse_table();
                callback({
                    domains: this._domain,
                    json: this._json,
                    tables: this._tables
                })
            }
        });
    }
    parse_fk() {
    }
    parse_domain() {
        _.forOwn(this._json["c:Domains"]["0"]["o:PhysicalDomain"], v => {
            this._domain[v.$.Id] = {
                Code: v['a:Code'][0],
                Name: v['a:Name'][0],
                Must: v["a:PhysicalDomain.Mandatory"] ? v["a:PhysicalDomain.Mandatory"]["0"] == 1 : false,
                Identity: v["a:Identity"] ? v["a:Identity"][0] == 1 : false,
                DataType: v["a:DataType"] ? v["a:DataType"][0] == 1 : false,
                Id: v.$.Id
            };
        });
    }
    parse_table() {
        var DefaultValueMap = {
            "\"\"": ''
        };
        var tables = {};
        _.forOwn(this._json['c:Tables'][0]['o:Table'], (v, k) => {
            var code = v['a:Code'][0].replace('prefix_', '');
            var table = {
                Name: v['a:Name'][0],
                Code: code.replace(/(\w+[_\w]{0,})/g, ($0, $1, $2) => {
                    // console.log($0)
                    return $1.replace(/_(\w)/g, ($a, $b) => {
                        return $b.toUpperCase()
                    }).replace(/(\w)/, ($c, $d) => {
                        return $d.toUpperCase()
                    })
                }),
                Columns: [],
                FKs: [],
            };
            var pkid = false;
            var tpkid = false;
            if (v["c:PrimaryKey"]
                && v["c:PrimaryKey"]["0"]
                && v["c:PrimaryKey"]["0"]["o:Key"]
                && v["c:PrimaryKey"]["0"]["o:Key"]["0"]) {
                pkid = v["c:PrimaryKey"]["0"]["o:Key"]["0"].$.Ref;
                _.forOwn(v["c:Keys"]["0"]["o:Key"], (key) => {
                    if (key.$.Id == pkid) {
                        tpkid = key["c:Key.Columns"]["0"]["o:Column"]["0"].$.Ref
                    }
                })
            } else {
                console.error(`表 ${v['a:Name'][0]} 的 主键 未设定`)
            }
            pkid = tpkid;
            if (v['c:Columns']
                && v['c:Columns'][0]
                && v['c:Columns'][0]['o:Column']
            ) {
                _.forOwn(v['c:Columns'][0]['o:Column'], (c, i) => {
                    table.Columns.push({
                        Name: c['a:Name'][0],
                        Comment: c["a:Comment"] ? c["a:Comment"]["0"] : '',
                        Code: c['a:Code'][0],
                        Domain: c["c:Domain"] ? this._domain[c["c:Domain"]["0"]["o:PhysicalDomain"]["0"].$.Ref] : {},
                        DataType: c['a:DataType'][0],
                        Identity: c['a:Identity'] == 1,
                        PrimaryKey: pkid == c.$.Id,
                        Unsigned: c["a:ExtendedAttributesText"] && c["a:ExtendedAttributesText"]["0"] ? c["a:ExtendedAttributesText"]["0"].indexOf('Unsigned') > -1 : false,
                        Must: c["a:Column.Mandatory"] ? c["a:Column.Mandatory"]["0"] == 1 : false,
                        Default: c["a:DefaultValue"] ? (DefaultValueMap[c["a:DefaultValue"]["0"]] === undefined ? c["a:DefaultValue"]["0"] : DefaultValueMap[c["a:DefaultValue"]["0"]]) : ''
                    });
                });
            } else {
                console.error(`表 ${v['a:Name'][0]} 的 字段 未设定`)
            }
            tables[table.Code] = table;
        });
        this._tables = tables;

    }
    gen_db() {
        console.log('Write Db JS Start')
        // 生成Db下的js文件
        var dbDir = 'src/db'
        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir)
        }
        _.forOwn(this._tables, (table, name) => {
            var columns = [];
            _.forOwn(table.Columns, (column) => {
                columns.push(`//${column.Name} 
/**
${column.Comment.replace("\r\n", "//").replace("\r", "//").replace("\n", "//")}
*/
    ${column.Code}:{
        type:DbDataType.${this.get_type(column.DataType)},
        primaryKey:${column.PrimaryKey},
        autoIncrement:${column.Identity},
        defaultValue:${this.get_defaultValue(column.Default)},
        allowNull:${!column.Must}
    }`)
            })
            var js = `import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    ${columns.join(',\r\n   ')}
}`;
            let dbPath = `${dbDir}/${name}.ts`
            fs.writeFileSync(dbPath, js)
            console.log(`Write src/db/${name}.ts`)
        })
        console.log(`Write Db Success`)
        return this;
    }
    get_type(type: string) {
        return type;
        // if (type.indexOf('INT(') > -1) {
        //     return 'BIGINT';
        // } else
        //     if (type.indexOf('VARCHAR(') > -1) {
        //         return 'STRING';
        //     }
        // if (type == "DATETIME") {
        //     return "DATE"
        // }
        // else {
        //     return type;
        // }
    }
    get_defaultValue(value) {
        switch (value) {
            case 'CURRENT_TIMESTAMP':
                return 'DbDataType.NOW'
            case "NULL":
                return "null"
            default:
                return value.length == 0 ? "''" : value;
        }
    }
    gen_relation() {
        //TODO 生成Relation类
        console.log(`Write Relation Start`)
        var dir = 'src/relation';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
        _.forOwn(this._tables, (table, name) => {
            var columns = ['/**'];
            _.forOwn(table.Columns, (column) => {
                columns.push(`//${column.Name} ${column.Code} ${column.DataType.toUpperCase()} ${column.Comment.replace("\r\n", "//").replace("\r", "//").replace("\n", "//")}`)
            })
            columns.push('*/')
            var js = `import Relation from "castle-koa/dist/lib/relation";
//${table.Name}
${columns.join(',\r\n   ')}
export default class ${name} extends Relation{

}
`;
            let path = `${dir}/${name}.ts`
            fs.writeFileSync(path, js)
            console.log(`Write src/relation/${name}.ts`)
        })
        console.log(`Write Relation Success`)
        return this;
    }
    gen_controller() {
        console.log(`Write Controller Start`)
        var dir = 'src/controller';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
        _.forOwn(this._tables, (table, name) => {

            var columns = ['/**'];
            _.forOwn(table.Columns, (column) => {
                columns.push(`//${column.Name} ${column.Code} ${column.DataType.toUpperCase()} ${column.Comment.replace("\r\n", "//").replace("\r", "//").replace("\n", "//")}`)
            })
            columns.push('*/')
            var js = `import Controller from 'castle-koa/dist/lib/controller'
//${table.Name}
${columns.join(',\r\n   ')}
export default class ${name} extends Controller{

}
`;
            let path = `${dir}/${name}.ts`
            fs.writeFileSync(path, js)
            console.log(`Write src/controller/${name}.ts`)
        })
        console.log(`Write Controller Success`)
        return this;
    }
    async gen_api() {
        return this;
    }
    async gen_vuex() {                
        //load template from url https://raw.githubusercontent.com/YanCastle/castle_cli/master/template/vuex/modules.ts
        let modules:string = await axios.get('https://raw.githubusercontent.com/YanCastle/castle_cli/master/template/vuex/modules.ts').then((response)=>{return response.data})
        let __MODULE_STATE__=[],__IMPORT__=[],__MODULES__=[];
        _.forOwn(this._tables,(table:any,name:string)=>{
            let __FIELDS__=[],__EMPTY__=[]
            _.forOwn(table.Columns, (column) => {
                __FIELDS__.push(`${column.Code}:${this.getTypeSymbol(column)},//${column.Name}`)
                __EMPTY__.push(`${column.Code}:${this.getDefaultValue(column)},//${column.Name}`)
                // columns.push(`//${column.Name} ${column.Code} ${column.DataType.toUpperCase()} ${column.Comment.replace("\r\n", "//").replace("\r", "//").replace("\n", "//")}`)
            })
            let filePath = path.join(this._dir,'store','modules',`${name}.ts`)
            this.checkDir(path.dirname(filePath))
            fs.writeFileSync(filePath,modules
                .replace(/\{__MODULE_NAME__\}/g,name)
                .replace(/\{__UPPER_MODULE_NAME__\}/g,name.toUpperCase())
                .replace(/\{__FIELDS__\}/g,__FIELDS__.join("\r\n    "))
                .replace(/\{__EMPTY__\}/g,__EMPTY__.join("\r\n    ")))
            __MODULE_STATE__.push(`${name}State:${name}State`);
            __IMPORT__.push(`import ${name},{State as ${name}State} from './modules/${name}'`);
            __MODULES__.push(name);
        })
        let index:string = await axios.get('https://raw.githubusercontent.com/YanCastle/castle_cli/master/template/vuex/index.ts').then((response)=>{return response.data})
        let indexPath = path.join(this._dir,'store','index.ts');
        fs.writeFileSync(indexPath,index.replace(/\{__IMPORT__\}/g,__IMPORT__.join("\r\n"))
            .replace(/\{__MODULES__\}/g,__MODULES__.join(",\r\n        "))
            .replace(/\{__MODULE_STATE__\}/g,__MODULE_STATE__.join(",\r\n    ")))
        return this;
    }
    getDefaultValue(column:any){
        return column.Default.length>0?column.Default:"''"
    }
    checkDir(dir){
        if(fs.existsSync(path.dirname(dir))){
            if(!fs.existsSync(dir)){fs.mkdirSync(dir)}
        }else{
            this.checkDir(path.dirname(dir))
            fs.mkdirSync(dir)
        }
    }
    getTypeSymbol(params:any) {
        let type={
            char:'String',
            timestamp:'Date',
            int:'Number',
            text:'String',
            datetime:'Date'
        };
        let t =['any'];
        _.forOwn(type,(d:any,k:any)=>{
            if(params.DataType.indexOf(k)>-1){
                t.push(d)
            }
        })
        return t.join('|')
    }
    async gen_compoments() {
        let index:string = await axios.get('https://raw.githubusercontent.com/YanCastle/castle_cli/master/template/vuex/index.ts').then((response)=>{return response.data})
        _.forOwn(this._tables,(table:any,name:string)=>{
            let __MODULES__=[],__FIELDS__=[],__EMPTY__=[]
            _.forOwn(table.Columns, (column) => {
                __FIELDS__.push(`${column.Code}:${this.getTypeSymbol(column)},//${column.Name}`)
                __EMPTY__.push(`${column.Code}:${this.getDefaultValue(column)},//${column.Name}`)
                // columns.push(`//${column.Name} ${column.Code} ${column.DataType.toUpperCase()} ${column.Comment.replace("\r\n", "//").replace("\r", "//").replace("\n", "//")}`)
            })
            let filePath = path.join(this._dir,'store','modules',`${name}.ts`)
            this.checkDir(path.dirname(filePath))
            // fs.writeFileSync(filePath,modules
            //     .replace(/\{__MODULE_NAME__\}/g,name)
            //     .replace(/\{__UPPER_MODULE_NAME__\}/g,name.toUpperCase())
            // .replace(/\{__FIELDS__\}/g,__FIELDS__.join("\r\n    ")
            // .replace(/\{__EMPTY__\}/g,__EMPTY__.join("\r\n    "))))
        })
        return this;
    }

}