import { BaseController } from 'castle-koa/dist/index';
import rpc from 'castle-koa/dist/utils/ws'
export default class Docker extends BaseController {
    async list() {
        return await rpc.request('docker', 'containers', { all: true })
    }
    async hosts() {
        return rpc;
    }
    async services() {
        return { Clients: rpc.getClients(), Services: rpc.getServices() }
    }
    async proxy(post) {
        return await rpc.request(post.To, post.Path, post.Data)
    }
    async health(post) {
        console.log(post)
        return true;
    }
    async hard(post) {
        console.log(post)
        return true;
    }
}