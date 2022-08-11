<template>
    <h1>Register</h1>
    <input type="text" v-model="userData.name" placeholder="ad soyad"><br>
    <input type="text" v-model="userData.username" placeholder="kullanici adi"><br>
    <input type="text" v-model="userData.password" placeholder="sifre"><br>
    <button @click="register">Kayıt ol</button><br>
    Zaten Üyeyim 
    <a href="#/login">Giriş Yap</a>
</template>
<script>
import CryptoJS from 'crypto-js'
export default {
    data(){
        return {
            userData:{
                name:'',
                username:'',
                password:''
            }
        }
    },
    methods:{
        register(){
            console.log(this.userData);
            const passwordHash = CryptoJS.SHA256(this.userData.password).toString();
            console.log(passwordHash);
            this.$appAxios.post("/users", { ...this.userData, password: passwordHash }).then(res=>{
                console.log(res);
            }).finally(()=>{
                this.userData.name = '';
                this.userData.username = '';
                this.userData.password = '';
            })
        }
    }
}
</script>