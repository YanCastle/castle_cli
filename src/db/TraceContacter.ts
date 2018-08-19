import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //跟踪联系人编号 
/**

*/
    TCID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //跟踪记录编号 
/**

*/
    PLID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
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
    }
}