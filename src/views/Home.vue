<template>
    <div class="home">
        <div class="text-center">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>

        <div class="container-lg ml-5">
            <div class="row my-2">
                <button @click="addNewUser" class="btn btn-primary">Add new user</button>
            </div>
            <div class="row">
                <users-table :users="getAllUsers"
                             @edit-user="editUser"
                             @delete-user="deleteUser"/>
            </div>
        </div>

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
                const userId = user.id;
                this.$router.push({ path: `edit-user/${userId}` });
            },
            addNewUser(){
                this.$router.push({path: 'edit-user'});
            }

        },
        mounted(){
        }



    }
</script>
