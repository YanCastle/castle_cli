"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    PPID: {
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
    Title: {
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
    },
    OBudget: {
        type: iface_1.DbDataType.double(12, 2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: true
    }
};
//# sourceMappingURL=ProjectProgramme.js.map