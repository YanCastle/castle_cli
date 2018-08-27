"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    DemandID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: '',
        allowNull: false
    },
    PCID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    JUser: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    JTime: {
        type: iface_1.DbDataType.timestamp,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    Address: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    CUID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    CTime: {
        type: iface_1.DbDataType.timestamp,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    User: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Importance: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
        allowNull: false
    },
    ETime: {
        type: iface_1.DbDataType.timestamp,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    },
    MUID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    ProjectDemandID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Memo: {
        type: iface_1.DbDataType.varchar(1000),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    ProcessMemo: {
        type: iface_1.DbDataType.varchar(1000),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    PassMemo: {
        type: iface_1.DbDataType.varchar(1000),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Status: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
        allowNull: false
    },
    Version: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Programme: {
        type: iface_1.DbDataType.varchar(1000),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Feasibility: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
        allowNull: false
    }
};
//# sourceMappingURL=Demand.js.map