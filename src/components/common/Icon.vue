<script setup lang="ts">
const props = defineProps<{
  icon: string;
  fontSize?: number;
}>()
</script>
<template>
  <div class="icon-container">
    <span class="material-symbols-rounded fs-24px icon" :style="{fontSize: `${props?.fontSize}px` ?? '24px'}">
      {{ props.icon }}
    </span>
  </div>
</template>
<style scoped lang="scss">
.icon-container{
  position: relative;
  user-select: none;
}
.icon{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
</style>
