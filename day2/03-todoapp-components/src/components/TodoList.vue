<template>
  <ul>
    <todo-list-item
      @delete-todo-item="$emit('delete-todo-item', $event)"
      v-for="todo in todoList"
      :key="todo"
      :todoItem="todo"
    />
  </ul>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
//   props: ["todoList"],
inject: ["todoList"],
  components: {
    TodoListItem,
  },
  created() {
    console.log(this.todoList) // injected value
  }
};
</script>
