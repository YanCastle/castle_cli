import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //单位编号 
/**

*/
    UnitID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //名称 
/**

*/
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //类型 
/**
0:个人,1:企业
*/
    Type:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:1,
        allowNull:false
    },
   //行业 
/**

*/
    Industry:{
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
   //创建时间 
/**

*/
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //创建人 
/**

*/
    CUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    }
}