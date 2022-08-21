<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <detail-swipe />
    <detail-infos />
    <detail-facility />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detail";

import DetailSwipe from "./cpn/detail-01-swipe.vue";
import DetailInfos from "./cpn/detail-02-infos.vue";
import DetailFacility from "./cpn/detail-03-facility.vue";

const router = useRouter();
const route = useRoute();
const detailStore = useDetailStore();
detailStore.fetchDetailInfosData(route.params.id).then(() => {
  // 轮播图数据
  // const { housePics } = storeToRefs(detailStore);
  // const swipeData = computed(() => detailStore.housePics);
});

// 返回上一页
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
  margin-bottom: 100px;
}
</style>
