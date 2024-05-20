<script setup lang="ts">
const emits = defineEmits<{(e:'click')}>()
</script>
<template>
  <div v-scale @click="emits('click')" class="button-container">
    <button class="button-strok"><slot></slot></button>
  </div>
</template>
<style scoped lang="scss">
.button-container {
  user-select: none;
  display: inline-block;
}
.button-strok {
  display: felx;
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  transition: background-color 0.225s;
  border-radius: 8px;
  background-color: transparent;
  &:hover {
    background-color: rgba(var(--secondary));
  }
}
</style>
