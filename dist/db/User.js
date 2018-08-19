"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iface_1 = require("castle-koa/dist/utils/iface");
exports.default = {
    UID: {
        type: iface_1.DbDataType.bigint,
        primaryKey: true,
        autoIncrement: false,
        defaultValue: '',
        allowNull: false
    },
    Name: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    Sex: {
        type: iface_1.DbDataType.int(5),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 0,
        allowNull: false
    },
    Phone: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    QQ: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    Wechat: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    Email: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    IDCard: {
        type: iface_1.DbDataType.char(50),
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    JTime: {
        type: iface_1.DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: iface_1.DbDataType.NOW,
        allowNull: false
    },
    OTime: {
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
    }
};
//# sourceMappingURL=User.js.map