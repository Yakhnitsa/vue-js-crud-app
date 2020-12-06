<template>
    <div class="card">
        <div class="card-header text-white" :class="userEditMode ? 'bg-secondary':'bg-success'">
            {{userEditMode ? "Edit user": "Create new user"}}
        </div>
        <div class="card-body">
            <form>
                <div class="form-row mt-2">
                    <div class="btn-group btn-group-toggle">
                        <label class="btn btn-outline-secondary"
                               :class="{'active': !importFromJson}">
                            <input type="radio" v-model="importFromJson">
                            Add user
                        </label>
                        <label class="btn btn-outline-secondary"
                               data-toggle="tooltip" data-placement="bottom"
                               :title="userEditMode ? 'Import from json is unavailable on edit mode':'import data from JSON'"
                               :class="{'active': importFromJson, 'disabled': userEditMode }">
                            <input :disabled="userEditMode" type="radio" value="asc" v-model="importFromJson" >
                            Import from json
                        </label>
                    </div>
                </div>
                <hr/>
                <div v-if="!importFromJson">
                    <div class="form-row mt-2">
                        <div class="col-lg-5 col-md-6">
                            <label for="nameInput">User name</label>
                            <input type="text" v-model="user.name" class="form-control" id="nameInput" placeholder="name">

                        </div>
                        <div class="col-lg-5  col-md-6">
                            <label for="surnameInput" class="text-left">User surname</label>
                            <input type="text" v-model="user.surname" class="form-control" id="surnameInput" placeholder="surname">
                            <div class="valid-feedback">
                            </div>
                        </div>
                    </div>

                    <div class="form-row mt-2">
                        <div class="col-lg-6 col-md-6">
                            <label for="userEmailInput">User email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="emailInputPrepend">@</span>
                                </div>
                                <input type="email" v-model="user.email" class="form-control" id="userEmailInput" placeholder="email" aria-describedby="emailInputPrepend">
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <label for="phoneInput">Phone number</label>
                            <div class="input-group">
                                <input type="text" v-model="user.phone" class="form-control" id="phoneInput" placeholder="(XXX) XXX-XX-XX"
                                       aria-describedby="phoneInputPrepend">
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="form-row mt-2">
                        <label for="jsonTextArea">Place json array</label>
                        <textarea v-model="jsonData" class="form-control" id="jsonTextArea" rows="3"></textarea>
                    </div>
                </div>
                <hr/>

                <div class="form-row mt-2 justify-content-end">
                    <button type="button" class="btn btn-secondary mx-1" @click="saveUser">Save</button>
                    <button type="button" class="btn btn-secondary mx-1" @click="revertChanges">Revert changes</button>
                </div>

            </form>
        </div>


    </div>
</template>

<script>
    export default {
        name: "UserEditForm",
        props:['user'],
        data(){
            return{
                importFromJson: false,
                jsonData:''
            }
        },
        computed:{
            userEditMode(){
                return this.user !== undefined && this.user.id > 0;
            }
        },
        methods:{

            saveUser(){
                if(this.userNameValidation() && this.emailValidation())
                this.$emit('save-user', this.user);
            },
            revertChanges(){

            },
            validateJson(){

            },
            validateForm(){

            },
            userNameValidation(){
                return true;
            },
            emailValidation(){
                return true;
            },
            phoneValidation(){

            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    label{
        margin-left: 1em;
    }
</style>