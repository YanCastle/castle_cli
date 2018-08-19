import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //开销记录 
/**

*/
    PMID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //开销名称 
/**

*/
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //开销时间 
/**

*/
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //开销地点 
/**

*/
    Address:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //开销类型 
/**

*/
    Type:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //开销人 
/**

*/
    CUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
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
   //状态 
/**
0:未审核,1:审核驳回,2:审核通过
*/
    Status:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },
   //开销金额 
/**

*/
    Money:{
        type:DbDataType.double(12,2),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0.00,
        allowNull:false
    }
}