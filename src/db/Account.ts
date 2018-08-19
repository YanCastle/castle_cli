import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //账号编号 
/**

*/
    UID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //账号 
/**

*/
    Account:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //密码 
/**

*/
    PWD:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    }
}