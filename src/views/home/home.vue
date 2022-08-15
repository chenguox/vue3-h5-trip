<template>
  <div class="home">
    <van-nav-bar title="旅途首页" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <div class="search-wrapper" v-show="isShowSearchBar">
      <search-bar />
    </div>
    <home-categories />
    <home-content />

    <div class="bottom"></div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import useHomeStore from "@/stores/modules/home";

import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore();
homeStore.fetchAllCitiesData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
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

.search-wrapper {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 10px 16px;
  background-color: #fff;
}

.bottom {
  margin-top: 200px;
}
</style>
src/App.vue
