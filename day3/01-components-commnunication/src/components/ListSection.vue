<template>
    <ul>
        <li v-for="item in userList" :key="item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default{
    inject: ['userList']
}
</script>