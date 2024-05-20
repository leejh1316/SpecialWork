<script setup lang="ts">
import { onBeforeMount } from "vue";
import { initializeApp } from "./composables";
import {useDateStore} from '@store'
onBeforeMount(() => {
  initializeApp();
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<style>
</style>
