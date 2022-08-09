<template>
  <div>
    <todo-list
      :todoList="todos"
      @delete-todo-item="$emit('delete-todo-item', $event)"
    />
    <result-bar :todoCount="todos.length" />
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  }
};
</script>