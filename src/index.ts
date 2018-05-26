#! /usr/bin/env node
import * as process from 'process';
import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import pdm from './pdm'
let cmd = process.argv[2]
let what = process.argv[3]
const functions = {
    gen_server: () => {
        //castle gen server path_to_pdm
    },
    gen_web: () => {

    }
}
if (functions[`${cmd}_${what}`] instanceof Function) {
    if (!fs.existsSync(process.argv[4])) {
        console.error('Error of *.pdm file path\r\npdm数据库设计稿文件不存在或路径不对，请核实')
        process.exit()
    }
    var p: pdm = new pdm();
    p.parse(process.argv[4], process.argv[5] ? process.argv[5] : './', async (d: any) => {
        switch (what) {
            case 'server':
                p.gen_relation().gen_controller().gen_db();
                break;
            case 'web':
                p.gen_api();
                p.gen_vuex();
                p.gen_compoments();
                break;
            default:
                if (p[`gen_${what}`] instanceof Function) {
                    p[`gen_${what}`]()
                }
                break;
        }
    })
    functions[`${cmd}_${what}`]()
} else if (cmd === 'init') {
    if (process.argv[4] === undefined) {
        console.error('need dir name,please use "castle init server dir_path" \r\n 需要输入目录名称')
        process.exit();
    }
    if (fs.existsSync(process.argv[4])) {
        console.error(`the dir ${process.argv[4]} existed ,please delete it and rerun this command.\r\n目录已存在，请删除目录后再次尝试`)
        process.exit();
    }
    child_process.execSync(`git clone https://github.com/YanCastle/castle_cli.git -b ${what} ` + process.argv[4], {

    })
    //删除git文件
    // console.log('init git')
    child_process.execSync(`git init`, {
        cwd: path.resolve(process.argv[4])
    })
    if (process.argv[5] && ['htt', 'git'].indexOf(process.argv[5].substr(0, 3)) > -1) {
        //添加git存储库
        console.log('Adding git remote')
        child_process.execSync(`git remote add origin ${process.argv[5]}`, { cwd: process.argv[4] })
    }
} else {
    console.error('cmd or args error\r\n命令行参数错误')
}