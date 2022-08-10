<template>
    <div>
        <h1>Detail</h1>
        <p>PARAMS: {{$route.params}}</p>
        <p>QUERY: {{$route.query}}</p>
        <!-- <button @click="$router.push('/')">Back</button> -->
        <button @click="goBack()">Back</button>
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route)
    },
    methods:{
        goBack(){
            // this.$router.go(-1)
            // this.$router.back()
            this.$router.push({
                name:'Home'
            })
        }
    }
}
</script>