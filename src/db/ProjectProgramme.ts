import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //方案编号 
/**

*/
    PPID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //周期编号 
/**

*/
    PCID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //方案名称 
/**

*/
    Title:{
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
        allowNull:true
    },
   //创建人 
/**

*/
    CUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //报价预算 
/**

*/
    OBudget:{
        type:DbDataType.double(12,2),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    }
}