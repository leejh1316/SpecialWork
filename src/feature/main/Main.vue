<script setup lang="ts">
import EmojiPicker from "@/components/emoji/EmojiPicker.vue";
import { SolidButton, Time, WorkDate, Calendar, NumberCard } from "@components";
import { useTheme } from "@utils/theme";
const changeTheme = () => useTheme().activateTheme(useTheme().getActiveTheme().name === "dark" ? "light" : "dark");
</script>
<template>
  <div>
    <SolidButton @click="changeTheme">A</SolidButton>
    <EmojiPicker></EmojiPicker>
    <Time></Time>
    <WorkDate></WorkDate>
    <Calendar></Calendar>
    <NumberCard title="총원" :number="182" :delay="true" />
    <NumberCard title="휴가자" :number="32" :delay="true" />
    <NumberCard title="결원" :number="42" :delay="true" />
    <NumberCard title="현재원" :number="140" :delay="true" />
  </div>
</template>
<style lang="scss"></style>
