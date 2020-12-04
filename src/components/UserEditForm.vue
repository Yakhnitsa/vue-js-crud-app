<template>
    <div>
        <form>
            <div class="form-row mt-2">
                <div class="col-lg-5 col-md-6">
                    <label for="nameInput text-left">User name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="name">
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-lg-5  col-md-6">
                    <label for="surnameInput" class="text-left">User surname</label>
                    <input type="text" class="form-control" id="surnameInput" placeholder="surname">
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
                        <input type="email" class="form-control" id="userEmailInput" placeholder="email" aria-describedby="emailInputPrepend">
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <label for="phoneInput">Phone number</label>
                    <div class="input-group">
                        <!--<div class="input-group-prepend">-->
                            <!--<span class="input-group-text" id="phoneInputPrepend">@</span>-->
                        <!--</div>-->
                        <input type="text" class="form-control" id="phoneInput" placeholder="(XXX) XXX-XX-XX"
                               aria-describedby="phoneInputPrepend">
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row mt-2">
                <label for="jsonTextArea">Place json array</label>
                <textarea v-model="jsonData" class="form-control" id="jsonTextArea" rows="3"></textarea>
            </div>
            <div class="form-row mt-2">
                <button type="button" class="btn btn-secondary mx-1" @click="saveUser">Save</button>
                <button type="button" class="btn btn-secondary mx-1" @click="revertChanges">Revert changes</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "UserEditForm",
        props:['user'],
        data(){
            return{
                importJson:false,
                jsonData:''
            }
        },
        methods:{
            saveUser(){

            },
            revertChanges(){

            },
            validateJson(){

            },
            validateForm(){

            },
            userNameValidation(){

            },
            emailValidation(){

            },
            phoneValidation(){

            }
        }
    }
</script>

<style scoped>
    label{
        margin-left: 1em;
    }
</style>