<template>
  <div class="search-nav">
    <div class="date-wrapper">
      <div class="live">
        <span class="name">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="leave">
        <span class="name">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <van-search v-model="value" placeholder="关键字/位置/民宿" show-action />
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { formatMonthDay } from "@/utils/format_date";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"));
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"));
</script>

<style lang="less" scoped>
.search-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  :deep(.van-search--show-action) {
    flex: 1;
  }

  .date-wrapper {
    .name {
      margin-right: 5px;
      font-size: 14px;
      color: #999;
    }
    .date {
      color: #333;
      font-weight: 500;
    }
  }
}
</style>
