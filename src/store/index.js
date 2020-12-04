/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {

    },
    state: () => ({
        users: [
                {
                    "id":1,
                    "name": "Vitaliy",
                    "surname": "Klichko",
                    "phone":"099 991 28 41",
                    "email":"some_email@com.ua"
                },
                {
                    "id":2,
                    "name": "Vladimir",
                    "surname": "Klichko",
                    "phone":"099 991 28 42",
                    "email":"some_other_email@com.ua"
                }
            ]

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
        addUserMutation(state,newUser){
            const index = state.users.findIndex(user => user.id === newUser.id);
            if(index === -1){
                state.users.push(newUser);
            }
            else{
                state.users.splice(index,1,newUser);
            }
        },
        deleteUserMutation(state,deletedUser){
            const index = state.users.findIndex(user => user.id === deletedUser.id);
            if(index !== -1) state.users.splice(index,1);
        }
    },
    actions:{

    }
})