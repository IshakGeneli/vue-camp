<template>
  <div>
    <list-section></list-section>
    <!-- <button @click='$store.state.permissions.push(new Date())'>add permission</button>  --> <!-- without mutation -->
    <button @click='addPermission(new Date())'>add permission</button> <!-- with mutation -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import ListSection from '@/components/ListSection'
export default {
  components:{
    ListSection
  },
  data() {
    return {

    }
  },
  created(){
    console.log(this.$store)
    // console.log(this.$store.getters.getElectronics)
    // console.log(this.$store.getters.activeUser)
    console.log(this.getElectronics)
  },
  methods:{
    addPermission(permission){
      // this.$store.commit('_addPermission', permission) // mutation (synchronous)
      this.$store.dispatch('_addPermission', permission) // action (asynchronous)
    }
  },
  computed: {
    // ...mapGetters({ // object syntax
    //   getElectronics: '_getElectronics',
    //   activeUser: '_activeUser'
    // }),
    ...mapGetters(["_getElectronics", "_activeUser", "_getPermissions"]),
    // customComputed(){

    // }
  }
}
</script>