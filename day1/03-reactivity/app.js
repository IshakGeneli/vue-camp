const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      result: "",
      result2: "",
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    // getResult() {
    //     this.result = this.counter > 3 ? "Greater than 3" : "Smaller than 3";
    //     console.log("getResult")
    // },
    increment2() {
      this.counter2++;
    },
    decrement2() {
      this.counter2--;
    },
    // getResult2() {
    //     this.result2 = this.counter2 > 3 ? "Greater than 3" : "Smaller than 3";
    //     console.log("getResult2")
    // }
  },
  computed: {
    getResult() {
      console.log("getResult");
      return this.counter > 3 ? "Greater than 3" : "Smaller than 3";
    },
    getResult2() {
      console.log("getResult2");
      return this.counter2 > 3 ? "Greater than 3" : "Smaller than 3";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    getResult(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
}).mount("#app");
