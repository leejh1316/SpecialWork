<script setup lang="ts">
// 문자가 겹치는 오류가 있는데 각 슬롯당 최소 너비를 만들어서 해결해야 할듯.
// 최소너비가 필요한 이유는 숫자당 크기가 다름 예를들어 '1'의 너비랑 '2'의 너비가 달라서 울렁거리는 현상이 나타남.
import { Card, Counter } from "..";
const props = defineProps<{
    title:string,
    number:number,
    delay:boolean
}>()
</script>
<template>
  <div class="number-card-container">
    <Card class="number-card">
      <div class="fs-18px fw-bold">{{ props.title }}</div>
      <div class="fs-52px fw-bold">
        <Counter :start-number="0" :target-number="props.number" :delay="props.delay"/>
      </div>
    </Card>
  </div>
</template>
<style scoped lang="scss">
.number-card-container{
    display: inline-block;
    width: 172px;
}
.number-card{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>
