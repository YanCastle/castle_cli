import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //需求跟踪编号 
/**

*/
    PLDID:{
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