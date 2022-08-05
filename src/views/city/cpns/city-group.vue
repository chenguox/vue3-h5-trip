<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="热门" />
      <div class="hot-city-list">
        <template v-for="(hotCity, key, index) in groupData.hotCities">
          <div class="hot-city-item" @click="selectCity(hotCity)">
            {{ hotCity.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(group, key, index) in groupData.cities" :key="key">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, key, index) in group.cities" :key="key">
          <van-cell :title="city.cityName" @click="selectCity(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
// 定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 动态的索引
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

const router = useRouter();
const cityStore = useCityStore();
const selectCity = (city) => {
  // 将选中的城市数据存在city store里
  cityStore.currentCity = city;

  // 返回上一页
  router.back();
};
</script>

<style lang="less" scoped>
.hot-city-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;

  .hot-city-item {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 7px 0;
    margin-right: 10px;
  }
}
</style>
