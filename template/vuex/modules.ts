import { isFunction, cloneDeep } from 'lodash';
import { ObjectState, SearchResult, SearchWehre } from '../IFace';
import {__MODULE_NAME__} from '../../api/{__MODULE_NAME__}';
import store, { ActionContextBasic } from '../'
//结构设计区
//常量定义区
export const A_{__UPPER_MODULE_NAME__}_SEARCH = 'A_{__UPPER_MODULE_NAME__}_SEARCH'
export const A_{__UPPER_MODULE_NAME__}_ADD = 'A_{__UPPER_MODULE_NAME__}_ADD'
export const A_{__UPPER_MODULE_NAME__}_SAVE = 'A_{__UPPER_MODULE_NAME__}_SAVE'
export const A_{__UPPER_MODULE_NAME__}_DEL = 'A_{__UPPER_MODULE_NAME__}_DEL'
export const M_{__UPPER_MODULE_NAME__}_SEARCH = 'A_{__UPPER_MODULE_NAME__}_SEARCH'
export const M_{__UPPER_MODULE_NAME__}_WHERE = 'M_{__UPPER_MODULE_NAME__}_WHERE'
export const M_{__UPPER_MODULE_NAME__}_WHERE_P = 'M_{__UPPER_MODULE_NAME__}_WHERE_P'
export const M_{__UPPER_MODULE_NAME__}_WHERE_KEYWORD = 'M_{__UPPER_MODULE_NAME__}_WHERE_KEYWORD'
export const M_{__UPPER_MODULE_NAME__}_WHERE_N = 'M_{__UPPER_MODULE_NAME__}_WHERE_N'
export const M_{__UPPER_MODULE_NAME__}_WHERE_W = 'M_{__UPPER_MODULE_NAME__}_WHERE_W'
export const G_{__UPPER_MODULE_NAME__}_ALL = 'G_{__UPPER_MODULE_NAME__}_ALL'
export const A_{__UPPER_MODULE_NAME__}_ALL = 'A_{__UPPER_MODULE_NAME__}_ALL'
export const M_{__UPPER_MODULE_NAME__}_ALL = 'M_{__UPPER_MODULE_NAME__}_ALL'
export const G_{__UPPER_MODULE_NAME__} = 'G_{__UPPER_MODULE_NAME__}'

const isDic = false;
//对象结构
export interface {__MODULE_NAME__} Object {
    //字段:类型
    {__FIELDS__}
}
//空对象
export const Empty{__MODULE_NAME__}: {__MODULE_NAME__}Object = {
    //字段:初始值
    {__EMPTY__}
}
//State存储库结构
export interface State {
    Where: SearchWehre,
    Result: SearchResult,
    All: {__MODULE_NAME__}Object[]
}
//定义初始化State
const state: State = {
    Where: {
        Keyword: "",
        W: {}, P: 1, N: 10
    },
    Result: {
        L: [],
        P: 1,
        N: 10,
        T: 0,
        R: []
    },
    All: []
}
//定义getters
const getters = {
    [G_{__UPPER_MODULE_NAME__}_ALL]() {
        if (state.All.length == 0 && isDic) {
            store.dispatch(A_{__UPPER_MODULE_NAME__}_ALL)
        }
        return state.All;
    },
    [G_{__UPPER_MODULE_NAME__}]() {
        return state.Result;
    }
}
//定义actions
const actions = {
    // 处理搜索请求
    async [A_{__UPPER_MODULE_NAME__}_SEARCH](context: ActionContextBasic) {
        let d = await {__MODULE_NAME__}.search(state.Where)
        context.commit(M_{__UPPER_MODULE_NAME__}_SEARCH, d);
    },
    //取出所有的值，仅仅针对字典型，其它类型禁止使用
    async [A_{__UPPER_MODULE_NAME__}_ALL](context: ActionContextBasic) {
        let d = await {__MODULE_NAME__}.search({ P: 1, N: 99999 })
        context.commit(M_{__UPPER_MODULE_NAME__}_ALL, d.L);
    },
    async [A_{__UPPER_MODULE_NAME__}_ADD](context: ActionContextBasic, { Data, s, e }: { Data: {__MODULE_NAME__}Object, s?: Function, e?: Function }) {
        let d = await {__MODULE_NAME__}.add(Data)
        if (d) { if (isFunction(s)) s() } else if (isFunction(e)) { e() }
        //更新列表
        context.dispatch(A_{__UPPER_MODULE_NAME__}_SEARCH)
        context.dispatch(A_{__UPPER_MODULE_NAME__}_ALL)
    },
    async [A_{__UPPER_MODULE_NAME__}_SAVE](context: ActionContextBasic, { Data, s, e }: { Data: {__MODULE_NAME__}Object, s?: Function, e?: Function }) {
        let d = await {__MODULE_NAME__}.save(Data.__MODULE_PK__, Data)
        if (d) { if (isFunction(s)) s() } else if (isFunction(e)) { e() }
        //更新列表
        context.dispatch(A_{__UPPER_MODULE_NAME__}_SEARCH)
        context.dispatch(A_{__UPPER_MODULE_NAME__}_ALL)
    },
    async [A_{__UPPER_MODULE_NAME__}_DEL](context: ActionContextBasic, { {__MODULE_NAME__}ID, s, e }: { {__MODULE_NAME__}ID: number, s?: Function, e?: Function }) {
        let d = await {__MODULE_NAME__}.del(__MODULE_PK__)
        if (d) { if (isFunction(s)) s() } else if (isFunction(e)) { e() }
        //更新列表
        context.dispatch(A_{__UPPER_MODULE_NAME__}_SEARCH)
        context.dispatch(A_{__UPPER_MODULE_NAME__}_ALL)
    },
};
const mutations = {
    [M_{__UPPER_MODULE_NAME__}_SEARCH](state: State, SR: SearchResult) {
        state.Result = SR;
    },
[M_{__UPPER_MODULE_NAME__}_WHERE](state: State, Where: SearchWehre) {
    state.Where = cloneDeep(Where)
},
[M_{__UPPER_MODULE_NAME__}_WHERE_P](state: State, P: number) {
    state.Where.P = P
},
[M_{__UPPER_MODULE_NAME__}_WHERE_W](state: State, W: any) {
    state.Where.W = W
},
[M_{__UPPER_MODULE_NAME__}_WHERE_N](state: State, N: number) {
    state.Where.N = N
},
[M_{__UPPER_MODULE_NAME__}_WHERE_KEYWORD](state: State, keyword: string) {
    state.Where.Keyword = keyword
},
[M_{__UPPER_MODULE_NAME__}_ALL](state: State, All: any) {
    if (All.length > 0) { state.All = All; }
},
    //TODO 其它额外的方法
};
export default {
    state, getters, actions, mutations
}
