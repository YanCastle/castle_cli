"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    UnitID: {
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
        defaultValue: '',
        allowNull: false
    },
    Type: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
        allowNull: false
    },
    Industry: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Address: {
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
        allowNull: false
    },
    CUID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    }
};
//# sourceMappingURL=Units.js.map