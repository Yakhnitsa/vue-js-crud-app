<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="container-fluid">
            <div class="row"></div>
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
            }

        },
        mounted(){
        }



    }
</script>
