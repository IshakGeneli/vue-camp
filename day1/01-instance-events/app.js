const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      link: {
        text: "Vue.js",
        href: "https://vuejs.org/",
        target: "_blank",
      },
      box: {
        id: "box",
        class: "box",
        style: "width: 100px; height: 100px; background-color: #ccc;",
      },
      cords: {
        x: 0,
        y: 0,
      },
      inputValue: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.link.text);
    },
    changeMessage(newMessage) {
      this.message = newMessage;
    },
    updateCords(event) {
      this.cords.x = event.offsetX;
      this.cords.y = event.offsetY;
    },
    updateCords2(test, event) {
      console.log(test);
      this.cords.x = event.clientX;
      this.cords.y = event.clientY;
    },
    logInputValue(event) {
      console.log(event.target.value);
      this.inputValue = event.target.value;
    },
  },
});

app.mount("#app");
