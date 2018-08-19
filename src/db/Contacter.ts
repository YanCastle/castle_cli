import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //联系信息编号 
/**

*/
    ContacterID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //姓名 
/**

*/
    Name:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //性别 
/**
0:男,1:女
*/
    Sex:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },
   //职位 
/**

*/
    Position:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //负责范围 
/**

*/
    Scope:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //手机号 
/**

*/
    Phone:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //地址 
/**

*/
    Address:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //QQ 
/**

*/
    QQ:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //微信 
/**

*/
    Wechat:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //邮件 
/**

*/
    Email:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}