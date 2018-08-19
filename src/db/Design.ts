import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //设计编号 
/**

*/
    DID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //附件编号 
/**

*/
    AID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //设计方案 
/**

*/
    Demo:{
        type:DbDataType.char(250),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}