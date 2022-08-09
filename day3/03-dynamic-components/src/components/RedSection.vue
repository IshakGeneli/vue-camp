<template>
  <h3 class="bg-red text-white">{{data}}</h3>
</template>
<script>
export default {
    props: ['data'],
     mounted() {
        console.log('Red mounted');
    },
    unmounted() {
        console.log('Red unmounted');
    },
}
</script>