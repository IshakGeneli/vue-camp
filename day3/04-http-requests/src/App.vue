<template>
  <div>
    <h3>LIST</h3>
    <input type="text" placeholder="todo" @keydown.enter="saveTodo" />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }} | 
        {{ todo.createdDate }}
        <button @click="removeTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getTodos() {
      axios.get("http://localhost:3000/items").then((response) => {
        this.todos = response.data || [];
      });
    },
    saveTodo(e) {
      axios
        .post("http://localhost:3000/items", {
          title: e.target.value,
          createdDate: new Date(),
        })
        .then((res) => {
          console.log(res);
          this.todos.push(res.data);
          e.target.value = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeTodo(todo) {
      axios
        .delete(`http://localhost:3000/items/${todo.id}`)
        .then(() => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }).catch((err) => {
          console.log(err);
        }
        );
    },
  },
  mounted(){
    this.getTodos();
  }
};
</script>