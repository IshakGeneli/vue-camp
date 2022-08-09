<template>
  <ModalComp>
    <!-- <template #title>
      <h3>Slot Header</h3>
    </template> -->
    <template v-slot:title>
      <h3>Slot Header</h3>
    </template>
    <template #content>
      <p class="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius sed laudantium atque deserunt alias incidunt cupiditate voluptas? Eaque, vitae.</p>
    </template>
    <template #footer>
      <button class="mr-2">Kapat</button>
      <button class="ml-2 green">Kaydet</button>
    </template>
    <template #default>
      <p>Default slot</p>
    </template>
  </ModalComp>
</template>
<script>
import ModalComp from "@/components/ModalComp.vue";
export default {
  components:{
    ModalComp
  }
}
</script>