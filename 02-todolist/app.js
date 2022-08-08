const app = Vue.createApp({
  data() {
    return {
      newTodo: {
        text: "",
        done: false,
      },
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({ text: this.newTodo.text, done: false });
      this.newTodo.text = "";
    },
    removeTodo(todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1);
    }
  },
});

app.mount("#app");
