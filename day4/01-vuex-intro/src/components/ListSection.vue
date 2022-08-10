<template>
    <ul>
      <!-- <li v-for="item in $store.state.permissions" :key="item"> -->
      <li v-for="item in _getPermissions" :key="item">
        {{ item }}
      </li>
    </ul>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(["_getPermissions"]),
        // customComputed(){

        // }
    }
}
</script>