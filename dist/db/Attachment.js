"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    AID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: '',
        allowNull: false
    },
    Type: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: false
    },
    Storage: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Path: {
        type: iface_1.DbDataType.char(250),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Name: {
        type: iface_1.DbDataType.char(50),
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
    CUID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    }
};
//# sourceMappingURL=Attachment.js.map