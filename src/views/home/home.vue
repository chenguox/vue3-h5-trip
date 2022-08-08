<template>
  <div class="home">
    <van-nav-bar title="旅途首页" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />
    <home-content />

    <div class="bottom"></div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";

import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";

const homeStore = useHomeStore();
homeStore.fetchAllCitiesData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();
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

.bottom {
  margin-top: 200px;
}
</style>
src/App.vue
