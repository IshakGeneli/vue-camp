const app = Vue.createApp({
    data() {
        return{
            name: "joe",
            age: 30,
            image:{
                url: "https://placeimg.com/400/400/any",
                alt: "any"
            }
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    },
});

app.mount("#app");