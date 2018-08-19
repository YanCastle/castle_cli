import { DbDataType } from "castle-koa/dist/utils/iface";
export default {
    //角色编号 
/**

*/
    PRID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:'',
        allowNull:false
    },
   //角色名称 
/**

*/
    Title:{
        type:DbDataType.char(50),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:'',
        allowNull:false
    }
}