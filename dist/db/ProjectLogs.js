"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    PLID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
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
    ProjectID: {
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
    Address: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Cost: {
        type: iface_1.DbDataType.double(12, 2),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0.00,
        allowNull: false
    }
};
//# sourceMappingURL=ProjectLogs.js.map