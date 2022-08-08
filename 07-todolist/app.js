const app = Vue.createApp({
  data() {
    return {
        newTodo: "",
      todoList: [],
    };
  },
  methods: {
    addTodo(newTodo) {
        this.todoList.push({text: newTodo, done: false});
        this.newTodo = "";
        console.log(this.todoList)
    },
    removeTodo(todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
    },
    toggleTodo(todo) {
        todo.done = !todo.done;
        console.log(this.todoList)
    }
  },
  computed:{
    doneTodoCount(){
        return this.todoList.filter(todo => todo.done).length;
    },
    unDoneTodoCount(){
        return this.todoList.filter(todo => !todo.done).length;
    }
  }
});

app.mount("#app");
