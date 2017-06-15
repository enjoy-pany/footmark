import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isOpen: false,
        success: false,
        warning: false,
        error: false,
        messContent:'默认提示信息',
    },
    mutations:{
        toggleDialog(state,payload){
            state.isOpen = payload;
        },
        openMessage(state,payload){
            state[payload.type] = payload.isopen;
            state.messContent = payload.content;
        }
    },
    actions:{},
    modules:{}
});

export default store;