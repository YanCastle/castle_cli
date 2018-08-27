"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = require("./lib/git");
git_1.default.createRepository('abctest', 'describe').then((e) => {
}).catch((e) => {
    console.error(e);
});
//# sourceMappingURL=test.js.map