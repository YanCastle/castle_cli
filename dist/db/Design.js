"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    DID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: '',
        allowNull: false
    },
    AID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Demo: {
        type: iface_1.DbDataType.char(250),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    }
};
//# sourceMappingURL=Design.js.map