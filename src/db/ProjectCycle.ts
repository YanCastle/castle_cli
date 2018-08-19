import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //周期编号 
/**

*/
    PCID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
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
   //周期名称 
/**

*/
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //开始时间 
/**

*/
    STime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //结束时间 
/**

*/
    ETime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //当前状态 
/**
0:开始,1;未开始
*/
    Status:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },
   //客户预算 
/**

*/
    CBudget:{
        type:DbDataType.double(12,2),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0.00,
        allowNull:true
    }
}