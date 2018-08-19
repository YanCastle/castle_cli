import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //需求编号 
/**

*/
    DemandID:{
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
   //提出人 
/**

*/
    JUser:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //提出时间 
/**

*/
    JTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //提出地点 
/**

*/
    Address:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //录入人 
/**

*/
    CUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //录入时间 
/**

*/
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //使用人员 
/**
该需求所涉及的使用人员
*/
    User:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //重要性 
/**
0:紧急,1:标准
*/
    Importance:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:1,
        allowNull:false
    },
   //计划完成时间 
/**

*/
    ETime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //需求负责人 
/**

*/
    MUID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //项目需求编号 
/**

*/
    ProjectDemandID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //需求描述 
/**

*/
    Memo:{
        type:DbDataType.varchar(1000),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //需求流程描述 
/**

*/
    ProcessMemo:{
        type:DbDataType.varchar(1000),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //验收标准描述 
/**

*/
    PassMemo:{
        type:DbDataType.varchar(1000),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //需求状态 
/**
0:正在执行,1:完成
*/
    Status:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:1,
        allowNull:false
    },
   //需求版本 
/**

*/
    Version:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //方案描述 
/**

*/
    Programme:{
        type:DbDataType.varchar(1000),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //需求是否可行 
/**
0:可行,1:不可行
*/
    Feasibility:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:1,
        allowNull:false
    }
}