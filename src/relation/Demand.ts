import Relation from "castle-koa/dist/lib/relation";
//需求
/**,
   //需求编号 DemandID BIGINT ,
   //周期编号 PCID BIGINT ,
   //提出人 JUser CHAR(50) ,
   //提出时间 JTime TIMESTAMP ,
   //提出地点 Address CHAR(50) ,
   //录入人 CUID BIGINT ,
   //录入时间 CTime TIMESTAMP ,
   //使用人员 User CHAR(50) 该需求所涉及的使用人员,
   //重要性 Importance INT(5) 0:紧急,1:标准,
   //计划完成时间 ETime TIMESTAMP ,
   //需求负责人 MUID BIGINT ,
   //项目需求编号 ProjectDemandID BIGINT ,
   //需求描述 Memo VARCHAR(1000) ,
   //需求流程描述 ProcessMemo VARCHAR(1000) ,
   //验收标准描述 PassMemo VARCHAR(1000) ,
   //需求状态 Status INT(5) 0:正在执行,1:完成,
   //需求版本 Version BIGINT ,
   //方案描述 Programme VARCHAR(1000) ,
   //需求是否可行 Feasibility INT(5) 0:可行,1:不可行,
   */
export default class Demand extends Relation{

}
