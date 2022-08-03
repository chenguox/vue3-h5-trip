<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1、搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- 2、tab的切换 -->
      <van-tabs v-model:active="active" color="#ff9854" line-height="3">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { getCityAll } from "@/services";

const router = useRouter();

// 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// const allCity = ref({});
// getCityAll().then((res) => {
//   allCity.value = res.data;
// });
</script>

<style lang="less" scoped></style>
