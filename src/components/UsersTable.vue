<template>
    <div class="scrollable-table">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.surname}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.email}}</td>
                    <td>
                        <button type="button"
                                @click="editUser(user)"
                                class="btn btn-secondary mx-1">edit</button>
                        <button type="button"
                                @click="deleteUser(user)"
                                class="btn btn-secondary mx-1">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: "UsersTable",
        props:['users'],
        methods:{
            editUser(user){
                this.$emit('edit-user',user)
            },
            deleteUser(user){
                this.$emit('delete-user',user)
            }
        }
    }
</script>

<style scoped>

</style>