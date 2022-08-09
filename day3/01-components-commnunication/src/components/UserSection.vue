<template>
    <ListSection />
    <AddItemSection />
</template>
<script>
import ListSection from '@/components/ListSection.vue';
import AddItemSection from '@/components/AddItemSection.vue';
export default {
    components: {
        ListSection,
        AddItemSection,
    },
}
</script>