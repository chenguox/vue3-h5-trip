<template>
  <div class="detail">
    <h2>detail</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import useDetailStore from "@/stores/modules/detail";

const route = useRoute();
const detailStore = useDetailStore();
detailStore.fetchDetailInfosData(route.params.id);
console.log(route.params.id);
</script>

<style lang="less" scoped></style>
