<template>
  <h3 class="bg-green text-white">Green</h3>
</template>
<script>
export default {
    mounted() {
        console.log('Green mounted');
    },
    unmounted() {
        console.log('Green unmounted');
    },
    activated() {
        console.log('Green activated');
    },
    deactivated() {
        console.log('Green deactivated');
    },
}
</script>