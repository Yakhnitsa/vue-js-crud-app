/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {

    },
    state: () => ({
        users: []
    }),
    getters: {
        getAllUsers(state){
            return state.users;
        },
        getUserById: (state) => (id) => {
            return state.users.find(user => user.id === id)
        },
        getUserByEmail: (state) => (email) => {
            return state.users.find(user => user.email === email)
        },
    },
    mutations: {
        addUserMutation(state,user){
            user.id = user.id === null? getUserId(): user.id;
            const index = state.users.findIndex(item => item.id === user.id);
            if(index === -1){

                state.users.push(user);
            }
            else{
                state.users.splice(index,1,user);
            }
        },
        deleteUserMutation(state, user){
            const index = state.users.findIndex(item => item.id === user.id);
            if(index !== -1) state.users.splice(index,1);
        }
    },
    actions:{

    }
})

let userId = 1;
function getUserId(){
    return userId++;
}