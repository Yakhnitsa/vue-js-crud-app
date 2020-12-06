<template>
    <div class="scrollable-table">
        <table class="table table-striped table-hover">
            <thead class="bg-light">
                <tr>
                    <th class="text-center">name</th>
                    <th class="text-center">surname</th>
                    <th class="text-center">phone</th>
                    <th class="text-center">email</th>
                    <th class="text-center">actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.surname}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.email}}</td>
                    <td style="width: 175px">
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
    .scrollable-table{
        width: 100%;
        max-height: 25em;
        overflow-y: scroll;
        position: relative;
    }
     .table td, .table th {
         padding: .2rem .75rem;
     }
    thead th {
        position: -webkit-sticky;
        position: sticky;
        top:0;
        background-color: #f8f9fa;
    }
    .btn{
        padding: .15rem .75rem;
    }


</style>