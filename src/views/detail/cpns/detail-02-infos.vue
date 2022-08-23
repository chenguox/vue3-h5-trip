<template>
  <div class="infos">
    <div class="name">{{ houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in houseTags" :key="index">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item?.tagText?.color,
            background: item?.tagText?.background?.color,
          }"
        >
          {{ item?.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="store">{{ commentBrief?.overall }}</span>
        <span class="title">{{ commentBrief?.scoreTitle }}</span>
        <span class="brief">{{ commentBrief?.commentBrief }}</span>
      </div>
      <dev class="right">
        <span class="count"
          >{{ commentBrief?.totalCount }}条评论
          <van-icon name="arrow" />
        </span>
      </dev>
    </div>
    <div class="position extra">
      <div class="left">{{ nearByPosition.address }}</div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useDetailStore from "@/stores/modules/detail";

const detailStore = useDetailStore();
const { houseName, houseTags, commentBrief, nearByPosition } =
  storeToRefs(detailStore);
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;
    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .comment {
    .store {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }

    .brief {
      color: #666;
    }
  }

  .position {
    .left {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }

    .right {
      line-height: 1;
    }
  }
}
</style>
