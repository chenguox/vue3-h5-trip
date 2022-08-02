<template>
  <div class="home">
    <van-nav-bar title="旅途首页" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home {
  --van-nav-bar-title-text-color: var(--primary-color) !important;

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
