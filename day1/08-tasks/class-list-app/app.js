const app = Vue.createApp({
    data() {
        return{
            hasBackgroundColor: false,
            hasColor:   false,
            hasBorder: false,
            hasBorderRadius: false,
            isBold: false,
            isItalic: false,
        }
    },
    computed:{
        textAreaClasses(){
            return{
                'bg-warning': this.hasBackgroundColor,
                'color-warning': this.hasColor,
                'border-warning': this.hasBorder,
                'border-radius': this.hasBorderRadius,
                'font-weight-bold': this.isBold,
                'font-style-italic': this.isItalic,
            }
        }
    }
}).mount("#app");