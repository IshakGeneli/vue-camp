const app = Vue.createApp({
    data() {
        return{
            search: "",
            itemList: ["item1", "item2", "item3"]
        }
    },
    methods: {
    },
    computed:{
        filteredList(){
            return this.itemList.filter(item => item.includes(this.search));
        }
    }
}).mount("#app");