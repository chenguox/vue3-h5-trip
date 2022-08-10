<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <house-item-v3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
        />
        <house-item-v9
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
        />
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

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  background: #f7f9fb;

  .title {
    width: 80px;
    height: 40px;
    font-size: 20px;
    padding: 10px;

    background: url("@/assets/img/home/header_bg.png");
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 6px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
