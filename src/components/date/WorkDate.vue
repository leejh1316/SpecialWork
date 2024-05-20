<script setup lang="ts">
import Card from "../common/Card.vue";
</script>
<template>
  <div class="workdate-container">
    <Card class="workdate-card">
      <div class="fs-18px fw-bold">Work Date</div>
      <input type="date" />
    </Card>
  </div>
</template>
<style scoped lang="scss">
.workdate-container {
  display: inline-block;
  max-width: 369px;
  width: 100%;
}
.workdate-card {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
