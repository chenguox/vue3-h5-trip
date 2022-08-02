<template>
  <div class="">
    <router-view />

    <tab-bar />
    <!-- <router-link to="/home">home</router-link>
    <router-link to="/message">message</router-link>
    <router-link to="/favor">favor</router-link>
    <router-link to="/order">order</router-link> -->
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
</script>

<style scoped></style>
