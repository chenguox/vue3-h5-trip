<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <house-item-v3 v-if="item.discoveryContentType === 3" />
        <house-item-v9 v-else-if="item.discoveryContentType === 9" />
      </template>
    </div>
  </div>
</template>

<script setup>
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";

import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
</script>

<style lang="less" scoped></style>
