<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in indicatorContent" :key="key">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getCategoryIndex(swipeData[active]) }}/
                {{ value.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
// const props = defineProps({
//   swipeData: {
//     type: Array,
//     default: () => [],
//   },
// });
import { computed } from "vue";
import { storeToRefs } from "pinia";
import useDetailStore from "@/stores/modules/detail";

const detailStore = useDetailStore();
const { swipeData } = storeToRefs(detailStore);

// 对数据进行转换
const indicatorContent = computed(() => {
  const swipeGroup = {};
  for (const item of swipeData.value) {
    let valueArray = swipeGroup[item.enumPictureCategory];
    if (!valueArray) {
      valueArray = [];
      swipeGroup[item.enumPictureCategory] = valueArray;
    }
    valueArray.push(item);
  }
  return swipeGroup;
});

// 定义转换数据的方法
const nameReg = /【(.*?)】/i;
const getName = (name) => {
  const results = nameReg.exec(name);
  return results[1];
};

// 获取当前索引的轮播图在 indicatorContent 对象项的第几项
const getCategoryIndex = (item) => {
  const valueArray = indicatorContent.value[item.enumPictureCategory];
  return valueArray.findIndex((data) => data === item) + 1;
};
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);

      .item {
        margin: 0 3px;
      }

      .active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
