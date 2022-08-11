<template>
    <div>
        header
        <button @click="logout" v-if="_isAuthenticated">Logout</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    methods:{
        logout(){
            this.$store.dispatch('clearUser');
            this.$router.push('/login');
        }
    },
    computed:{
        ...mapGetters(["_isAuthenticated"])
    }
}
</script>