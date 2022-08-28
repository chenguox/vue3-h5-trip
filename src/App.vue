<template>
  <div class="">
    <router-view />
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-if="route.meta.hideTabBar" />
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
