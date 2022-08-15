<template>
  <div class="">
    <router-view />
    <tab-bar />
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<style scoped></style>
