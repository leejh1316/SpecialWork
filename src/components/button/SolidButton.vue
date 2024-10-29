<script setup lang="ts">
const props = defineProps<{
  disabled?:boolean;
  alwaysActiveBackgroundEffect?: boolean;
}>();
const emits = defineEmits<{ (e: "click") }>();
</script>
<template>
  <div v-scale="{disabled}" class="button-container">
    <button
      class="button-solid"
      :class="{
        'active': alwaysActiveBackgroundEffect,
        'disabled': disabled
      }"
      :disabled="disabled" 
      @click="emits('click')"
    >
      <slot></slot>
    </button>
  </div>
</template>
<style scoped lang="scss">
.button-container {
  user-select: none;
  display: inline-block;
}
.button-solid {
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  transition: background-color 0.225s;
  border-radius: 8px;
  background-color: transparent;
  &:not(&.disabled):hover,
  // &:hover,
  &.active{
    background-color: rgba(var(--secondary));
  }
}
</style>
