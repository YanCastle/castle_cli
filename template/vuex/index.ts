import Vue from '../vue'
import Vuex, { Commit, Dispatch,ActionTree,GetterTree } from 'vuex'
import Login, { State as LoginState } from './base/Login'
import Menu, { State as MenuState } from './base/Menu'
{__IMPORT__}
Vue.use(Vuex)
export interface ActionContextBasic {
    commit: Commit,
    dispatch: Dispatch
}
export interface State {
    MenuState: MenuState,
    LoginState: LoginState,
    {__MODULE_STATE__}
}
const actions: ActionTree<State, any> = {
}
const getters: GetterTree<State, any> = {
}
const debug = true
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        Menu,
        Login,
        {__MODULES__}
    },
    strict: debug,
})
