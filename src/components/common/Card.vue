<script setup lang="ts"></script>
<template>
  <div class="common-card">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.common-card {
  padding: 24px 16px 28px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
  background-color: rgba(var(--card-background));
}
</style>
