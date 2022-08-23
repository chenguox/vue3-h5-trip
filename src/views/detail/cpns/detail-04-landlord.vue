<template>
  <div class="landloard">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlordModule.topScroll" alt="" />
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlordModule.hotelLogo" alt="" />
            </div>
            <div class="info">
              <div class="name">{{ landlordModule.hotelName }}</div>
              <div class="tags">
                <template
                  v-for="(item, index) in landlordModule.hotelTags"
                  :key="index"
                >
                  <div class="item" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span
                      class="divider"
                      v-if="index !== landlordModule.hotelTags.length - 1"
                      >|</span
                    >
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template
            v-for="(item, index) in landlordModule.hotelSummary"
            :key="index"
          >
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

import { storeToRefs } from "pinia";
import useDetailStore from "@/stores/modules/detail";

const detailStore = useDetailStore();
const { landlordModule } = storeToRefs(detailStore);
</script>

<style lang="less" scoped>
.intro {
  .top {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;

      .avatar {
        img {
          width: 54px;
          height: 54px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          font-size: 16px;
          font-weight: 600;
        }
        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
          .divider {
            margin: 0 5px;
          }
        }
      }
    }
    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;
    .item {
      font-size: 12px;

      .title {
        color: #999;
      }
      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        color: #666;
      }
    }
  }
}
</style>
