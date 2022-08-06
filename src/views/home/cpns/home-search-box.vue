<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start item">
        <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="count">
        <span>共17晚</span>
      </div>
      <div class="end item">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onCalendarConfirm"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import { formatMonthDay, getAfterDay } from "@/utils/format_date";

const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功:", res);
    },
    (err) => {
      console.log("获取位置失败:", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

// 日期范围的处理
const startDate = ref(formatMonthDay(new Date()));
const endDate = ref(formatMonthDay(getAfterDay(new Date(), 1)));

const showCalendar = ref(false);
const onCalendarConfirm = (dates) => {
  // 1.设置日期
  const selectStartDate = dates[0];
  const selectEndDate = dates[1];
  startDate.value = formatMonthDay(selectStartDate);
  endDate.value = formatMonthDay(selectEndDate);

  // 2、隐藏日历
  showCalendar.value = false;
};
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;

  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
      color: #333;
      font-size: 15px;
    }

    .position {
      width: 80px;
      display: flex;
      align-items: center;

      .text {
        position: relative;
        top: 2px;
        color: #666;
        font-size: 12px;
      }

      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }

  .date-range {
    display: flex;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0 20px;

      width: 100px;
      height: 45px;
      font-size: 10px;
      color: #999;

      .time {
        font-size: 15px;
        font-weight: 500;
        color: #333;
      }
    }

    .count {
      flex: 1;
      line-height: 45px;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
