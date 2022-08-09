<template>
    <li class="d-flex justify-content-between align-items-center">
        <span>{{todoItem}}</span>
        <button @click="$emit('delete-todo-item', todoItem)">X</button>
        <!-- <button @click="removeTodo(todoItem)">X</button> -->
    </li>
</template>
<script>
export default {
    props:['todoItem']
}
</script>
