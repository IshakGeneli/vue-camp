<template>
  <h3 class="bg-blue text-white">Blue</h3>
  <slot />
  <input type="text">
</template>
<script>
export default {
     mounted() {
        console.log('Blue mounted');
    },
    unmounted() {
        console.log('Blue unmounted');
    },
}
</script>