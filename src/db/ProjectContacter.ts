import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //项目联系人编号 
/**

*/
    PCID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //联系信息编号 
/**

*/
    ContacterID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //项目编号 
/**

*/
    ProjectID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}