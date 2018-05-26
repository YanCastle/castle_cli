#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const child_process = require("child_process");
const fs = require("fs");
const path = require("path");
const pdm_1 = require("./pdm");
let cmd = process.argv[2];
let what = process.argv[3];
const functions = {
    gen_server: () => {
    },
    gen_web: () => {
    }
};
if (functions[`${cmd}_${what}`] instanceof Function) {
    if (!fs.existsSync(process.argv[4])) {
        console.error('Error of *.pdm file path\r\npdm数据库设计稿文件不存在或路径不对，请核实');
        process.exit();
    }
    var p = new pdm_1.default();
    p.parse(process.argv[4], process.argv[5] ? process.argv[5] : './', (d) => __awaiter(this, void 0, void 0, function* () {
        switch (what) {
            case 'server':
                p.gen_relation().gen_controller().gen_db();
                break;
            case 'web':
                p.gen_api();
                p.gen_vuex();
                p.gen_compoments();
                break;
            default:
                if (p[`gen_${what}`] instanceof Function) {
                    p[`gen_${what}`]();
                }
                break;
        }
    }));
    functions[`${cmd}_${what}`]();
}
else if (cmd === 'init') {
    if (process.argv[4] === undefined) {
        console.error('need dir name,please use "castle init server dir_path" \r\n 需要输入目录名称');
        process.exit();
    }
    if (fs.existsSync(process.argv[4])) {
        console.error(`the dir ${process.argv[4]} existed ,please delete it and rerun this command.\r\n目录已存在，请删除目录后再次尝试`);
        process.exit();
    }
    child_process.execSync(`git clone https://github.com/YanCastle/castle_cli.git -b ${what} ` + process.argv[4], {});
    child_process.execSync(`git init`, {
        cwd: path.resolve(process.argv[4])
    });
    if (process.argv[5] && ['htt', 'git'].indexOf(process.argv[5].substr(0, 3)) > -1) {
        console.log('Adding git remote');
        child_process.execSync(`git remote add origin ${process.argv[5]}`, { cwd: process.argv[4] });
    }
}
else {
    console.error('cmd or args error\r\n命令行参数错误');
}
//# sourceMappingURL=index.js.map