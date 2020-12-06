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
                            <input type="text" v-model="formData.name" class="form-control" id="nameInput" placeholder="name">

                        </div>
                        <div class="col-lg-5  col-md-6">
                            <label for="surnameInput" class="text-left">User surname</label>
                            <input type="text" v-model="formData.surname" class="form-control" id="surnameInput" placeholder="surname">
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
                                <input type="email" v-model="formData.email" class="form-control" id="userEmailInput" placeholder="email" aria-describedby="emailInputPrepend">
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <label for="phoneInput">Phone number</label>
                            <div class="input-group">
                                <input type="text" v-model="formData.phone" class="form-control" id="phoneInput" placeholder="(XXX) XXX-XX-XX"
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
                    <button type="button" class="btn btn-secondary mx-1"
                            v-if="userEditMode"
                            @click="addNewUser">New user</button>
                    <button type="button" class="btn btn-secondary mx-1" @click="saveUser">Save</button>
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
                importFromJson: false,
                jsonData:''
            }
        },
        computed:{
            userEditMode(){
                return this.formData.id !== null;
            }
        },
        methods:{

            saveUser(){
                this.$emit('save-user', Object.assign({},this.formData));
                if(!this.userEditMode){
                    this.clearFields();
                }
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