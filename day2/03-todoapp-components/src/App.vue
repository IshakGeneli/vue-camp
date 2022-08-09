<template>
  <div class="container">
    <h1>Todo List</h1>
    <!-- <add-todo @add-todo="addTodo"/> -->
    <add-todo :addTodo="addTodo" />
    <list-section :todos="todos" @delete-todo-item="removeTodo"/>
    <!-- <list-section /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: ["todo1", "todo2", "todo3"],
    };
  },
  provide() {
    return {
      todoList: this.todos,
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo),1);
    },
  },
  computed: {
    remainingCount() {
      return this.provideData.todos.filter((todo) => !todo.completed).length;
    },
    completedCount() {
      return this.provideData.todos.filter((todo) => todo.completed).length;
    },
  },
};
</script>
