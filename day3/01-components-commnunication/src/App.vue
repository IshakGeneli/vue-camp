<template>
  <UserSection />
</template>
<script>
import UserSection from "@/components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["John", "Jane", "Jack"],
      },
    };
  },
  provide() {
    return {
      userList: this.provideData.userList,
      addItem: this.addItem,
    };
  },
  methods: {
    addItem(newItem) {
      this.provideData.userList.push(newItem);
    },
  },
};
</script>