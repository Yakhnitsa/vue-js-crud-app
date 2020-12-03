/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {

    },
    state: () => ({
        foo:[]
    }),
    getters: {
        foo: state => state.foo,
    },
    mutations: {
        setFooMutation(state,foo){
            state.foo = foo;
        }
    },
    actions:{
        async fetchRailroadDocumentsAction({commit}){
            try {
                commit('setFooMutation','some value')
            }catch(error){
                console.log(error);
            }finally {
                console.log('ended');
            }
        }
    }


})