import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //项目用户编号 
/**

*/
    PUID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //用户编号 
/**

*/
    UID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    },
   //角色编号 
/**

*/
    PRID:{
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
   //加入时间 
/**

*/
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:true
    },
   //状态 
/**
0:参与,1:不参与
*/
    Status:{
        type:DbDataType.int(5),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:true
    }
}