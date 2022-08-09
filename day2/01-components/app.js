const app = Vue.createApp({
  data() {
    return{}
  },
});

app.component("counter-app", {
  data() {return {
    counter: 0,
  };},
  template: `
    <div>
        {{counter}}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
    `,
});

app.mount("#app");
