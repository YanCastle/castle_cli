import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //客户联系人编号 
/**

*/
    UCID:{
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
   //单位编号 
/**

*/
    UnitID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}