<template>
    <div class="card">
        <div class="card-header text-white" :class="userEditMode ? 'bg-secondary':'bg-success'">
            {{userEditMode ? "Edit user": "Create new user"}}
        </div>
        <div class="card-body">
            <form @submit="saveUser">
                <div class="form-row mt-2">
                    <div class="btn-group btn-group-toggle">
                        <label class="btn btn-outline-secondary"
                               :class="{'active': !jsonMode}">
                            <input type="radio" v-bind:value="false" v-model="jsonMode">
                            Add user
                        </label>
                        <label class="btn btn-outline-secondary"
                               data-toggle="tooltip" data-placement="bottom"
                               :title="userEditMode ? 'Import from json is unavailable on edit mode':'import data from JSON'"
                               :class="{'active': jsonMode, 'disabled': userEditMode }">
                            <input :disabled="userEditMode" type="radio" v-bind:value="true" v-model="jsonMode">
                            Import from json
                        </label>
                    </div>
                </div>
                <hr/>
                <div v-if="!jsonMode">
                    <div class="form-row mt-2">
                        <div class="col-lg-5 col-md-6">
                            <label for="nameInput">User name</label>
                            <input type="text" v-model="formData.name"
                                   class="form-control" id="nameInput" placeholder="name" required>
                            <!--<div class="valid-feedback">-->
                                <!--name is ok!-->
                            <!--</div>-->
                            <!--<div class="invalid-feedback">-->
                                <!--Please choose a username.-->
                            <!--</div>-->

                        </div>
                        <div class="col-lg-5  col-md-6">
                            <label for="surnameInput" class="text-left">User surname</label>
                            <input type="text" v-model="formData.surname"
                                   class="form-control" id="surnameInput" placeholder="surname" required>
                            <!--<div class="valid-feedback">-->
                                <!--surname is ok!-->
                            <!--</div>-->
                        </div>
                    </div>

                    <div class="form-row mt-2">
                        <div class="col-lg-6 col-md-6">
                            <label for="userEmailInput">User email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="emailInputPrepend">@</span>
                                </div>
                                <input type="email" v-model="formData.email" class="form-control" id="userEmailInput"
                                       placeholder="email" aria-describedby="emailInputPrepend">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <label for="phoneInput">Phone number</label>
                            <div class="input-group">
                                <input type="text" v-model="formData.phone" class="form-control" id="phoneInput" placeholder="(XXX) XXX-XX-XX"
                                       aria-describedby="phoneInputPrepend">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="form-row mt-2">
                        <label for="jsonTextArea">Place json array</label>
                        <textarea v-model.lazy="jsonData"
                                  :class="{'is-invalid' : !jsonIsValid, 'is-valid': jsonIsValid}"
                                  class="form-control" id="jsonTextArea" rows="3"></textarea>
                        <div class="invalid-feedback">
                            Invalid json data
                        </div>
                        <div class="valid-feedback">
                            JSON data is ok, found {{usersFromJson.length}} records
                        </div>
                    </div>
                </div>
                <hr/>

                <div class="form-row mt-2 justify-content-end">
                    <button type="button" class="btn btn-secondary mx-1"
                            v-if="userEditMode"
                            @click="addNewUser">New user</button>
                    <button type="submit" class="btn btn-secondary mx-1">Save</button>
                    <button type="button" class="btn btn-secondary mx-1" @click="clearFields">Revert changes</button>
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
                formData:{
                    id: null,
                    name:null,
                    surname:null,
                    email:null,
                    phone:null,
                },
                jsonMode: false,
                jsonData:''
            }
        },
        computed:{
            userEditMode(){
                return this.formData.id !== null;
            },
            usersFromJson(){
                let users = [];
                try{
                    users = JSON.parse(this.jsonData);
                }catch(e){
                    return [];
                }
                users.forEach(user =>{
                    if(!this.checkUser(user)) return [];
                });
                return users;
            },
            jsonIsValid(){
                return this.usersFromJson.length > 0;
            }
        },
        methods:{
            saveUser(){
                if(this.jsonMode && this.jsonIsValid){
                    this.usersFromJson.forEach(user =>
                        this.$emit('save-user',user)
                    )
                }
                else{
                    this.$emit('save-user', Object.assign({},this.formData));
                    if(!this.userEditMode){
                        this.clearFields();
                    }
                }
            },
            checkUser(user){
                if(!user.hasOwnProperty('name') || user.name.length < 1) return false;
                if(!user.hasOwnProperty('surname') || user.surname.length < 1) return false;
                if(!user.hasOwnProperty('email')) return false;
                return user.hasOwnProperty('phone');
            },
            addNewUser(){

                this.$emit('new-user');
                for(const[key,value] of Object.entries(this.formData)){
                    this.formData[key] = null;
                }
            },

            clearFields(){
                if(this.userEditMode){
                    this.formData = Object.assign({},this.user);
                }
                else{
                    for(const[key,value] of Object.entries(this.formData)){
                        this.formData[key] = null;
                    }
                    this.jsonData = ''
                }

            },
            validateJson(){

            },
            validateForm(){

            },

        },
        watch:{
            user(val){
                if(val !== undefined){
                    this.formData = Object.assign(this.formData,val);
                }
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
    hr {
        margin-top: .4rem;
        margin-bottom: .4rem;
    }
    .card-body {
        padding: .75rem;
    }

</style>