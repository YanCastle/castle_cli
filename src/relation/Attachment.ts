import Relation from "castle-koa/dist/lib/relation";
//附件表
/**,
   //附件编号 AID BIGINT ,
   //类型 Type INT(5) 0:开销附件,1:跟踪附件,2:需求附件,3:设计附件,
   //存储方式 Storage CHAR(50) ,
   //存储地址 Path CHAR(250) ,
   //文件名 Name CHAR(50) ,
   //上传时间 CTime TIMESTAMP ,
   //上传人 CUID BIGINT ,
   */
export default class Attachment extends Relation{

}
