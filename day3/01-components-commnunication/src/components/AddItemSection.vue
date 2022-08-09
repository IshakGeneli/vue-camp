<template>
    <button @click="addItem(new Date().getTime())">New Item</button>
</template>
<script>
export default {
    inject: ['addItem'],
}
</script>