<template>
  <div class="about">
    <h1>User edit page</h1>
    <p>{{user.id}}</p>
    <p>{{user.name}}</p>
    <p>{{user.surname}}</p>
    <p>{{user.email}}</p>
    <p>{{user.phone}}</p>
    <!--<users-table></users-table>-->
  </div>
</template>
<script>
    import UsersTable from '@/components/UsersTable.vue'
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'Home',
        components: {
            // UsersTable
        },
        data(){
            return{
                user:{
                    id:'',
                    name:'new user',
                    surname:'new User',
                    email:'new email',
                    phone:'new phone'
                }
            }
        },

        computed:{
            ...mapGetters(['getUserByEmail','getUserById']),
        },
        methods:{

            editUser(user){

            },
            deleteUser(user){

            },
            checkUser(user){

            }
        },
        mounted(){
            const userId = this.$route.params.id;
            if(userId){
                const userFromStore = this.getUserById(parseInt(userId));
                this.user  = userFromStore !== undefined ? userFromStore : this.user;
            }

        }
    }

</script>
