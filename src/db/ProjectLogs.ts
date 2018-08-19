import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //跟踪记录编号 
/**

*/
    PLID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //用户编号 
/**

*/
    CUID:{
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
    },
   //跟踪时间 
/**

*/
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //地点 
/**

*/
    Address:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //跟踪成本 
/**

*/
    Cost:{
        type:DbDataType.double(12,2),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0.00,
        allowNull:false
    }
}