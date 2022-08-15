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
        <span class="time">{{ startDateStr }}</span>
      </div>
      <div class="count">
        <span>共{{ stayCount }}晚</span>
      </div>
      <div class="end item">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
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

    <!-- 价格/人数选择 -->
    <div class="price-counter bottom-gray-line">
      <div class="price-tip">价格不限</div>
      <div class="counter-tip">人数不限</div>
    </div>

    <!-- 关键字/位置/名宿 -->
    <div class="keyword bottom-gray-line">关键字/位置/名宿</div>

    <!-- 快捷选择 -->
    <div class="quick-select">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="select-item"
          :style="{
            backgroundColor: item.tagText.background.color,
            color: item.tagText.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn">开始搜索</div>
      <div class="tip">民宿预订服务由XX网提供</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main";
import { formatMonthDay, getAfterDay, getDiffDays } from "@/utils/format_date";

const router = useRouter();

// 位置/城市
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
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value, endDate.value));

const showCalendar = ref(false);
const onCalendarConfirm = (dates) => {
  // 1.设置日期
  const selectStartDate = dates[0];
  const selectEndDate = dates[1];
  mainStore.startDate = selectStartDate;
  mainStore.endDate = selectEndDate;
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  // 2、隐藏日历
  showCalendar.value = false;
};

// 热门建议
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
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

  .price-counter {
    display: flex;
    // align-items: center;

    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #999;

    .price-tip {
      flex: 1;
    }

    .counter-tip {
      width: 120px;
      border-left: 1px solid var(--line-color);
      padding-left: 20px;
    }
  }

  .keyword {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #999;
    padding: 0 20px;
  }

  .quick-select {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 20px;
    .select-item {
      height: 22px;
      line-height: 22px;
      padding: 0 8px;
      font-size: 12px;
      border-radius: 14px;
      margin: 5px;
    }
  }

  .search-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn {
      width: 342px;
      height: 38px;
      max-height: 50px;
      font-weight: 500;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      background-image: var(--theme-linear-gradient);
    }

    .tip {
      height: 32px;
      font-size: 9px;
      line-height: 32px;
      color: #ccc;
    }
  }
}
</style>
