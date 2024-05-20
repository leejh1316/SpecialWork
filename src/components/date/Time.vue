<script setup lang="ts">
import { useDateStore } from "@/store";
import { storeToRefs } from "pinia";
import Card from "../common/Card.vue";
import { computed } from "vue";
import { Counter } from "..";
const { date, day, time } = storeToRefs(useDateStore());
const timeArray = computed(()=>time.value.split(':'))
</script>
<template>
  <div class="time-container">
    <Card class="time-card">
      <div class="fs-18px fw-bold">TIME</div>
      <div class="time-information">
        <div class="fs-16px"><Counter :start-number="timeArray[0]" :target-number="timeArray[0]"/>:<Counter :start-number="timeArray[1]" :target-number="timeArray[1]"/>:<Counter :start-number="timeArray[2]" :target-number="timeArray[2]"/></div>
        <div class="fs-14px">{{ date }} / {{ day }}요일</div>
      </div>
    </Card>
  </div>
</template>
<style scoped lang="scss">
.time-container {
  display: inline-block;
  max-width: 369px;
  width: 100%;
}
.time-card {
  display: flex;
  align-items: center;
  gap: 24px;
}
.time-information {
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > :nth-child(1) {
    letter-spacing: 1px;
  }
  & > :nth-child(2) {
    color: rgba(var(--text-tertiary));
  }
}
</style>
