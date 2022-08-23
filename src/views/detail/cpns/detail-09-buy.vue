<template>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <div class="price-wrapper">
      <span class="final-price">¥{{ product.finalPrice }}.00</span>
      <del class="price">¥{{ product.productPrice }}.00</del>
    </div>
    <van-action-bar-button
      type="warning"
      text="立即预定"
      @click="onClickButton"
    />
  </van-action-bar>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useDetailStore from "@/stores/modules/detail";

const detailStore = useDetailStore();
const { product } = storeToRefs(detailStore);
</script>

<style lang="less" scoped>
.price-wrapper {
  display: flex;
  flex-direction: column;
  .final-price {
    color: #ee0a24;
  }
  .price {
    color: #333;
  }
}
</style>
