<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <users-table :users="getAllUsers"
                    @edit-user="editUser"
                    @delete-user="deleteUser"/>
    </div>
</template>

<script>
    import UsersTable from '@/components/UsersTable.vue'
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'Home',
        components: {
            UsersTable
        },
        computed: {
            ...mapGetters(['getAllUsers']),

        },
        methods: {
            ...mapMutations({
               deleteUser: 'deleteUserMutation'
            }),
            editUser(user){
                console.log(user);
            }

        },
        mounted(){
            console.log("home mounted");
        }



    }
</script>
