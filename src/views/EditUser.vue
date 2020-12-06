<template>
  <div class="container-fluid">
    <h1>User edit page</h1>
    <div class="container-md ml-lg-2 ml-md-1">
      <user-edit-form :user="user" @save-user="saveUser"/>
    </div>
    <div class="container-md ml-lg-2 ml-md-1 mt-2">
      <users-table :users="getAllUsers" @edit-user="editUser" @delete-user="deleteUser"/>
    </div>


  </div>
</template>
<script>
    import UsersTable from '@/components/UsersTable.vue'
    import {mapGetters, mapMutations} from 'vuex';
    import UserEditForm from "../components/UserEditForm.vue";

    export default {
        name: 'EditUser',
        components: {
            UsersTable,
            UserEditForm
        },
        data(){
            return{
                user: {}
            }
        },

        computed:{
            ...mapGetters(['getUserByEmail','getUserById','getAllUsers']),
        },
        methods:{
            ...mapMutations(['addUserMutation','deleteUserMutation']),

            saveUser(user){
                this.addUserMutation(user);
            },
            editUser(user){
                this.$router.push({ path: `/edit-user/${user.id}`});
            },
            deleteUser(user){
              this.deleteUserMutation(user);
            },
            checkUser(user){

            },
            clearCurrentUser(){
                const clearUser = {};
                for(const[key,value] of Object.entries(this.user)){
                    clearUser[key] = null;
                }
                this.user = clearUser;
            },
            loadUserFromStore(){
                const userId = this.$route.params.id;
                if(userId){
                    const userFromStore = this.getUserById(parseInt(userId));
                    if(userFromStore !== undefined){
                        this.user = Object.assign({},userFromStore);
                        // for(const[key,value] of Object.entries(userFromStore)){
                        //     this.user[key] = userFromStore[key];
                        // }
                    }else{
                        this.$router.push({ path: '/edit-user'});
                    }
                }
            }
        },
        watch:{
            $route(to,from){
                this.loadUserFromStore();
          }
        },
        mounted(){
            this.loadUserFromStore();
        }
    }

</script>
