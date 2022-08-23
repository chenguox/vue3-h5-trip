<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="finish">
      <detail-swipe />
      <detail-infos />
      <detail-facility />
      <detail-landlord />
      <detail-comment />
      <detail-notice />
      <detail-map />
      <detail-intro />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">学习旅途, 永无止境!</div>
    </div>
    <detail-buy />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detail";

import DetailSwipe from "./cpns/detail-01-swipe.vue";
import DetailInfos from "./cpns/detail-02-infos.vue";
import DetailFacility from "./cpns/detail-03-facility.vue";
import DetailLandlord from "./cpns/detail-04-landlord.vue";
import DetailComment from "./cpns/detail-05-comment.vue";
import DetailNotice from "./cpns/detail-06-notice.vue";
import DetailMap from "./cpns/detail-07-map.vue";
import DetailIntro from "./cpns/detail-08-intro.vue";
import DetailBuy from "./cpns/detail-09-buy.vue";

const router = useRouter();
const route = useRoute();
const detailStore = useDetailStore();

// 获取数据后再渲染，确保获取到经纬度
const finish = ref(false);
detailStore.fetchDetailInfosData(route.params.id).then((res) => {
  finish.value = res;
});

// 返回上一页
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
  margin-bottom: 100px;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
