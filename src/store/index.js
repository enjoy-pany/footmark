import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //dialog组件状态管理
        isOpen: false,
        //message组件状态管理
        success: false,
        warning: false,
        error: false,
        messContent:'默认提示信息',
        testList: ''
    },
    mutations:{
        toggleDialog(state,payload){
            state.isOpen = payload;
        },
        openMessage(state,payload){
            state[payload.type] = payload.isopen;
            state.messContent = payload.content;
        },
        testFn(state,payload){
            console.log(payload)
            state.testList = payload;
        }
    },
    actions:{
        testFnSync(context){
            axios.get('../../../static/mock/test.json').then(res => {
              console.log(res.data.testObj)
              context.commit('testFn',res.data.testObj);
            }, res => {
              console.log(res)
            })
        }
    },
    modules:{}
});

export default store;