const app =  Vue.createApp({
    data(){
        return {
            value: 0
        }
    },
    computed:{
        result(){
            return this.value < 33 ? 'Henüz Bitmedi' : 'Tamamlandı';
        }
    },
    watch:{
        result(){
            setTimeout(() => {
            this.value = 0
            }, 5000);
        }
    }
}); 

app.mount("#app");