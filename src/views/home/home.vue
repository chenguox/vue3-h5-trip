<template>
  <div class="home" ref="homeRef">
    <van-nav-bar title="旅途首页" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <div class="search-wrapper" v-if="isShowSearchBar">
      <search-bar />
    </div>
    <home-categories />
    <home-content />
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<script setup>
import { watch, ref, computed, onActivated } from "vue";
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

const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
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

onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  --van-nav-bar-title-text-color: var(--primary-color);

  padding-bottom: 50px;
  height: 100vh;
  overflow-y: auto;

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
</style>
src/App.vue
