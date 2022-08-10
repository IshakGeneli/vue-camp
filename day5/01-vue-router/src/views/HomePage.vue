<template>
  <div>
    <h2>Home</h2>
    <p>This is the about page</p>
    <button @click="goDetailPage">Go Detail</button>
  </div>
</template>
<script>
export default {
  methods: {
    goDetailPage() {
      this.$router.push({
        name: "Detail",
        params: {
          id: 1,
          otherParam: "Vue.js",
        },
        query: {
          foo: "bar",
          active: false,
        },
      });
    },
  },
};
</script>