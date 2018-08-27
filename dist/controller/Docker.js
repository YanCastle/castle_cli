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
const index_1 = require("castle-koa/dist/index");
const ws_1 = require("castle-koa/dist/utils/ws");
class Docker extends index_1.BaseController {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ws_1.default.request('docker', 'containers', { all: true });
        });
    }
    hosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return ws_1.default;
        });
    }
    services() {
        return __awaiter(this, void 0, void 0, function* () {
            return { Clients: ws_1.default.getClients(), Services: ws_1.default.getServices() };
        });
    }
    proxy(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ws_1.default.request(post.To, post.Path, post.Data);
        });
    }
    health(post) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(post);
            return true;
        });
    }
    hard(post) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(post);
            return true;
        });
    }
}
exports.default = Docker;
//# sourceMappingURL=Docker.js.map