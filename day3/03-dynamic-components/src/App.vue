<template>
  <div class="container">
    <button class="red" @click="activeComponent = 'Red'">Red</button>
    <button class="green" @click="activeComponent = 'Green'">Green</button>
    <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    <!-- <Red v-if="activeComponent == 'Red'"/>
    <Green v-if="activeComponent == 'Green'"/>
    <Blue v-if="activeComponent == 'Blue'"/> -->
    <component :is="activeComponent" :data="'comp data'">
      <h3>TEST</h3> <!-- DEFAULT SLOT -->
    </component>
    <br />
    <hr />
    <br />

    <!-- keep-alive dont unmount the inside component -->
    <keep-alive> 
      <component :is="activeComponent" :data="'comp data'">
        <h3>TEST</h3>
        <!-- DEFAULT SLOT -->
      </component>
    </keep-alive>
  </div>
</template>
<script>
import Red from "@/components/RedSection.vue";
import Green from "@/components/GreenSection.vue";
import Blue from "@/components/BlueSection.vue";

export default {
  components: {
    Red,
    Green,
    Blue,
  },
  data() {
    return {
      activeComponent: "Red",
    };
  },
};
</script>