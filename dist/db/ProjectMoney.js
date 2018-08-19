"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    PMID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: '',
        allowNull: false
    },
    Title: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    CTime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: iface_1.DbDataType.NOW,
        allowNull: false
    },
    Address: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    Type: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    UID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    PLID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Status: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: false
    },
    Money: {
        type: iface_1.DbDataType.double(12, 2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: false
    }
};
//# sourceMappingURL=ProjectMoney.js.map