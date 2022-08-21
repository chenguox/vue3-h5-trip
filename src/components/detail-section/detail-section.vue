<template>
  <div class="section">
    <div class="header">
      <h2 class="title">标题</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer">
      <h2>尾部</h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
