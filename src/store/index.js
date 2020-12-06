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
            if(state.users.length <=0){
                state.users = loadFromLocalStorage();
            }
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
            user.id = user.id ? getUserId(): user.id;
            const index = state.users.findIndex(item => item.id === user.id);
            if(index === -1){
                state.users.push(user);
            }
            else{
                state.users.splice(index,1,user);
            }
            saveToLocalStorage(state.users);
        },
        deleteUserMutation(state, user){
            const index = state.users.findIndex(item => item.id === user.id);
            if(index !== -1) state.users.splice(index,1);
            saveToLocalStorage(state.users);
        }
    },
    actions:{

    }
})

const idRef = 'vue-crud-app-id';
const usersRef = 'vue-crud-app-users';

function getUserId(){
    let id = 0;
    if(localStorage.getItem(idRef)){
        id = localStorage.getItem(idRef);
        id++;
    }
    localStorage.setItem(idRef,id);
    return id;
}
function saveToLocalStorage(users){
    const parsed = JSON.stringify(users);
    localStorage.setItem(usersRef, parsed);
}
function loadFromLocalStorage(){
    if(localStorage.getItem(usersRef)){
        try {
            return JSON.parse(localStorage.getItem(usersRef));
        } catch(e) {
            localStorage.removeItem(usersRef);
        }
        return [];
    }
    return []
}