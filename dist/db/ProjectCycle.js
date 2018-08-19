"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    PCID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: '',
        allowNull: false
    },
    ProjectID: {
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
        defaultValue: "",
        allowNull: false
    },
    STime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: iface_1.DbDataType.NOW,
        allowNull: false
    },
    ETime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: iface_1.DbDataType.NOW,
        allowNull: false
    },
    Status: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: false
    },
    CBudget: {
        type: iface_1.DbDataType.double(12, 2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: true
    },
    OBudget: {
        type: iface_1.DbDataType.double(12, 2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: true
    }
};
//# sourceMappingURL=ProjectCycle.js.map