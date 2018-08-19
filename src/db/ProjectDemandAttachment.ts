import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //需求附件编号 
/**

*/
    PDAID:{
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
   //需求编号 
/**

*/
    DemandID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}