const app = Vue.createApp({
    data() {
        return {
            value: '',
        }
    },
    methods: {
        showAlert(){
            alert("Hello Vue!");
        }
    }
})

app.mount("#app");