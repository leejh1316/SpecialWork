<script setup lang="ts">
import { SolidButton } from "../button/index";
import type { Emoji } from "./EmojiType";
const props = defineProps<{ emoji: Emoji }>();
const emits = defineEmits<{ (e: "click", value: Emoji) }>();
</script>
<template>
  <SolidButton @click="emits('click', props.emoji)">
    {{ props.emoji.emoji }}
  </SolidButton>
</template>
<style lang="scss"></style>
