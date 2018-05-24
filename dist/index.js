#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const child_process = require("child_process");
const fs = require("fs");
const functions = {
    generate_server: () => {
    },
    generate_web: () => {
    }
};
let cmd = process.argv[2];
let what = process.argv[3];
if (functions[`${cmd}_${what}`] instanceof Function) {
    functions[`${cmd}_${what}`]();
}
else if (cmd === 'init') {
    if (process.argv[4] === undefined) {
        console.log('need dir name,please use "castle init server dir_path"');
        process.exit();
    }
    if (fs.existsSync(process.argv[4])) {
        console.error(`the dir ${process.argv[4]} existed ,please delete it and rerun this command`);
        process.exit();
    }
    child_process.execSync(`git clone https://github.com/YanCastle/castle_cli.git -b ${what} ` + process.argv[4], {});
    if (process.argv[5] && ['htt', 'git'].indexOf(process.argv[5].substr(0, 3)) > -1) {
        console.log('Adding git remote');
        child_process.execSync(`git remote add origin ${process.argv[5]}`);
    }
}
else {
    console.error('cmd or args error');
}
//# sourceMappingURL=index.js.map