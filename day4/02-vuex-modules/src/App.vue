<template>
  <div>
    <p>{{$store.state.siteName}}</p>
    <p>{{$store.state.contact.siteName}}</p>
    <p>{{$store.state.about.siteName}}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  methods:{
    created(){
      console.log(this.$store)
    }
  },
  created(){
    console.log(this.$store.getters["contact/getSiteName"])
    console.log(this.$store.getters["about/getSiteName"])
    console.log('---')
    console.log(this.getContactSiteName)
    console.log(this.getAboutSiteName)
  },
  computed:{
    ...mapGetters({
      getContactSiteName: 'contact/getSiteName',
      getAboutSiteName: 'about/getSiteName'
    })
  }
}
</script>