<template>
  <div class="container-fluid p-0">
    <div class="container-md ml-0 mt-3 p-0">
      <user-edit-form :user="user" @save-user="saveUser"  @new-user="newUser"/>
    </div>
    <div class="container-md ml-0 mt-3 p-0">
      <users-table :users="getAllUsers" @edit-user="editUser" @delete-user="deleteUser"/>
    </div>
  </div>
</template>
<script>
    import UsersTable from '@/components/UsersTable.vue'
    import {mapGetters, mapMutations} from 'vuex';
    import UserEditForm from "@/components/UserEditForm.vue";

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

            newUser(){
                this.$router.push({ path: '/edit-user/'}).catch(()=>{});
            },
            saveUser(user){
                this.addUserMutation(user);
            },
            editUser(user){
                this.$router.push({ path: `/edit-user/${user.id}`}).catch(()=>{});
                this.loadUserFromStore();
            },
            deleteUser(user){
              this.deleteUserMutation(user);
            },
            loadUserFromStore(){
                const userId = this.$route.params.id;
                if(userId){
                    const userFromStore = this.getUserById(parseInt(userId));
                    if(userFromStore !== undefined){
                        this.user = Object.assign({},userFromStore);
                    }else{
                        this.$router.push({ path: '/edit-user'}).catch(()=>{});
                    }
                }
            }
        },
        mounted(){
            this.loadUserFromStore();
        }
    }

</script>
