const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            isRed: false,
        }
    },
    computed:{
        boxClasses(){
            // return {
            //     border: this.showBorder,
            //     "red-bg": this.isRed,
            // }
        },
        boxStyles(){
            return {
                border: this.showBorder ? "1px solid red" : "",
                backgroundColor: this.isRed ? "red" : "",
            }
        }
    }
})

app.mount("#app");