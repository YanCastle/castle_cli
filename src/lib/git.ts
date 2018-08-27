import axios from 'axios'
import * as query from 'querystring'
const token = 'e7d37a4b7d5edeed562f4a127a9d2cd14e7838a1'
const request = axios.create()
request.interceptors.response.use((data) => {
    return data.data
})
request.interceptors.request.use((config) => {
    config.headers.Authorization = `token ${token}`
    return config;
})
async function post(api, data: any): Promise<any> {
    return await request.post(`http://git.tansuyun.cn/api/v1/${api}`, data)
}
async function get(api, data?: any): Promise<any> {
    return await request.get(`http://git.tansuyun.cn/api/v1/${api}?${query.stringify(data)}`)
}
async function put(api, data: any): Promise<any> {
    return await request.put(`http://git.tansuyun.cn/api/v1/${api}`, data)
}
class Gogs {
    async listRepositories(): Promise<Repository[]> {
        return await get('user/repos')
    }
    async createRepository(RepoName: string, Description: string) {
        return await post('user/repos', { name: RepoName, description: Description, private: true })
    }
    async createHook(RepoUser: string, RepoName: string, URL: string) {
        return await post(`/repos/${RepoUser}/${RepoName}/hooks`, {
            type: 'gogs', active: true, config: {
                url: URL,
                content_type: 'json',
            },
        })
    }
    async addCollaborator(RepoUser: string, RepoName: string, UserName: string, Permission: PermissionType = PermissionType.Write) {
        return await put(`/repos/${RepoUser}/${RepoName}/collaborators/${UserName}`, {
            permission: Permission
        })
    }
}
const gogs = new Gogs()
export default gogs;
export enum PermissionType {
    Read = 'read',
    Write = 'write',
    Admin = 'admin'
}
export interface Repository {
    id: number;
    owner: Owner;
    name: string;
    full_name: string;
    description: string;
    private: boolean;
    fork: boolean;
    parent?: any;
    empty: boolean;
    mirror: boolean;
    size: number;
    html_url: string;
    ssh_url: string;
    clone_url: string;
    website: string;
    stars_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    default_branch: string;
    created_at: string;
    updated_at: string;
    permissions: Permissions;
}

interface Permissions {
    admin: boolean;
    push: boolean;
    pull: boolean;
}

interface Owner {
    id: number;
    login: string;
    full_name: string;
    email: string;
    avatar_url: string;
    username: string;
}