<template>
  <div class="home">
    <van-nav-bar title="旅途首页" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
  </div>
</template>

<script setup>
import HomeSearchBox from "./cpns/home-search-box.vue";
</script>

<style lang="less" scoped>
.home {
  --van-nav-bar-title-text-color: var(--primary-color);

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
src/App.vue
