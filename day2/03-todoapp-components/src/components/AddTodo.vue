<template>
  <input
    v-model="newTodo"
    @keyup.enter="addTodo(newTodo)"
    type="text"
    placeholder="Add Todo"
  />
</template>
<script>
export default {
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    // addTodo() {
    //   this.$emit("add-todo", this.newTodo);
    //   this.newTodo = "";
    // },
  }
};
</script>
