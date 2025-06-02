<script setup>

    import { ref } from 'vue';

    let ShowPassword = ref(false);
    

</script>

<template>
    <div class="body-wrapper">
        <div class="login-box">
            <div class="logo">
                <h1>Company Name</h1>
                <h3>Admin Management</h3>
            </div>
            
            <div class="form-field">
                <p>Username</p>
                <input type="text" placeholder="Username">
            </div>
            
            <div class="form-field">
                <p>Password</p>
                <div class="custom-input">
                    
                    <input :type="ShowPassword ? 'text' : 'password'" placeholder="Password">
                    
                    <span @click="ShowPassword = !ShowPassword">
                        <img v-if="ShowPassword == true" src="./../../images/show.svg">
                        <img v-else src="./../../images/hide.svg">
                    </span>
                </div>
            </div>
            
            <div class="form-field">
                <button>Login</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

    div.login-box {
        padding: 45px 50px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 325px;
        background-color: #e3e3e3;
        border: 1px solid #b5b5b57a;
        box-shadow: 0 0 75px #afafaf40;
    }

    div.login-box div.logo {
        display: flex;
        flex-direction: column;
        text-align: center
    }

    div.login-box div.logo h1 {
        font-size: 20pt;
        font-weight: normal;
        color: #000000;
    }

    div.login-box div.logo h3 {
        font-size: 11pt;
        font-weight: 400;
        color: #292929;
    }

    div.login-box div.form-field {
        display: flex;
        flex-direction: column;
        gap: 5px
    }

    div.login-box div.form-field p {
        font-size: 11pt;
        color: #23b3e3
    }

    div.login-box div.form-field input {
        padding: 10px;
        border: 1px solid #d7d7d7;
        border-radius: 7px
    }

    .ff__error {
        text-align: center;
        line-height: 14pt;
        margin-top: 5px;
        color: #fb8585;
        font-weight: 400
    }

    div.login-box button {
        border: none;
        background-color: #3b82f6;
        color: #fff;
        padding: 10px;
        border-radius: 7px;
        cursor: pointer;
        font-size: 14pt;
    }

    div.custom-input {    padding: 10px;
    border: 1px solid #d7d7d7;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;}
    div.custom-input input {    padding: 0 !important;
    border: none !important;
    border-radius: 0px !important;}
    div.custom-input span {cursor: pointer;}
    div.custom-input span img {}

</style>