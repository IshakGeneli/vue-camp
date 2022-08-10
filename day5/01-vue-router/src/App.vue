<template>
  <!-- <a href="/">Home</a>
  <a href="/hakkımda">About</a> -->
  <router-link to="/" active-class="active">Home</router-link>
  <router-link to="/hakkımda" active-class="active">About</router-link>
  <router-link to="/detay/2/2" active-class="active">Detail</router-link>
  <router-view></router-view>
</template>