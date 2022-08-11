<template>
    <h1>Login</h1>
    <input v-model="userData.username" type="text" placeholder="kullanici adi"><br>
    <input v-model="userData.password" type="text" placeholder="sifre"><br>
    <button @click="login">Giris Yap</button><br>
    Hesabim yok<a href="#/register">Kayit ol</a>
</template>
<script>
import CryptoJS from 'crypto-js'
export default {
    data(){
        return {
            userData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            const password = CryptoJS.SHA256(this.userData.password).toString();
            this.$appAxios.get(`/users?username=${this.userData.username}&password=${password}`).then(res=>{
                if (res?.data?.length > 0) {
                    this.$store.dispatch('setUser', res.data[0]);
                    this.$router.push('/');
                } else {
                    alert('Kullanici adi veya sifre yanlis');
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>