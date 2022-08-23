<template>
  <div class="home">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useDetailStore from "@/stores/modules/detail";

import DetailSection from "@/components/detail-section/detail-section.vue";

const detailStore = useDetailStore();
const longitude = detailStore.positionModule.longitude;
const latitude = detailStore.positionModule.latitude;
console.log(longitude, latitude);

const mapRef = ref();

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value); // 创建地图实例
  const point = new BMapGL.Point(longitude, latitude); // 创建点坐标
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMapGL.Marker(point);
  map.addOverlay(marker);
});
</script>

<style lang="less" scoped>
.baidu {
  height: 250px;
}
</style>
