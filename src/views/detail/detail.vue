<template>
  <div class="detail" ref="detailRef">
    <tab-control
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="finish" v-memo="[finish]">
      <detail-swipe />
      <detail-infos name="描述" :ref="getSectionRef" />
      <detail-facility name="设施" :ref="getSectionRef" />
      <detail-landlord name="房东" :ref="getSectionRef" />
      <detail-comment name="评论" :ref="getSectionRef" />
      <detail-notice name="须知" :ref="getSectionRef" />
      <detail-map name="周边" :ref="getSectionRef" />
      <detail-intro />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">学习旅途, 永无止境!</div>
    </div>
    <detail-buy class="detail-buy" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDetailStore from "@/stores/modules/detail";

import TabControl from "@/components/tab-control/tab-control.vue";
import DetailSwipe from "./cpns/detail-01-swipe.vue";
import DetailInfos from "./cpns/detail-02-infos.vue";
import DetailFacility from "./cpns/detail-03-facility.vue";
import DetailLandlord from "./cpns/detail-04-landlord.vue";
import DetailComment from "./cpns/detail-05-comment.vue";
import DetailNotice from "./cpns/detail-06-notice.vue";
import DetailMap from "./cpns/detail-07-map.vue";
import DetailIntro from "./cpns/detail-08-intro.vue";
import DetailBuy from "./cpns/detail-09-buy.vue";

import useScroll from "@/hooks/useScroll";

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

// 监听 tabControl 的显示和隐藏
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value >= 300;
});

// 封装 sectionEls 对象数据
const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});
const getSectionRef = (value) => {
  const name = value.$el.getAttribute("name");
  console.log(value.$el);
  sectionEls.value[name] = value.$el;
};
// tabControl 实现点击跳转
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let instance = el.offsetTop;
  console.log(instance);
  if (index !== 0) {
    instance = instance - 46;
  }

  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth",
  });
};
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 50px;

  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }

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

  .detail-buy {
    position: fixed;
    z-index: 9999;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
