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
const axios_1 = require("axios");
const query = require("querystring");
const token = 'e7d37a4b7d5edeed562f4a127a9d2cd14e7838a1';
const request = axios_1.default.create();
request.interceptors.response.use((data) => {
    return data.data;
});
request.interceptors.request.use((config) => {
    config.headers.Authorization = `token ${token}`;
    return config;
});
function post(api, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request.post(`http://git.tansuyun.cn/api/v1/${api}`, data);
    });
}
function get(api, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request.get(`http://git.tansuyun.cn/api/v1/${api}?${query.stringify(data)}`);
    });
}
function put(api, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request.put(`http://git.tansuyun.cn/api/v1/${api}`, data);
    });
}
class Gogs {
    listRepositories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield get('user/repos');
        });
    }
    createRepository(RepoName, Description) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post('user/repos', { name: RepoName, description: Description, private: true });
        });
    }
    createHook(RepoUser, RepoName, URL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post(`/repos/${RepoUser}/${RepoName}/hooks`, {
                type: 'gogs', active: true, config: {
                    url: URL,
                    content_type: 'json',
                },
            });
        });
    }
    addCollaborator(RepoUser, RepoName, UserName, Permission = PermissionType.Write) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield put(`/repos/${RepoUser}/${RepoName}/collaborators/${UserName}`, {
                permission: Permission
            });
        });
    }
}
const gogs = new Gogs();
exports.default = gogs;
var PermissionType;
(function (PermissionType) {
    PermissionType["Read"] = "read";
    PermissionType["Write"] = "write";
    PermissionType["Admin"] = "admin";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
//# sourceMappingURL=git.js.map