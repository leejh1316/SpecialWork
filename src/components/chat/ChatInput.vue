<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
const props = defineProps<{ isMention: boolean }>();

const reg = /d/g;

const message = ref("");
const inputRef = ref<HTMLElement>();
const isMention = computed(() => props.isMention);

const resizeHeight = () => {
  if (!inputRef.value) return;
  inputRef.value.style.height = `42px`;
  inputRef.value.style.height = `${Math.min(inputRef.value.scrollHeight, 200)}px`;
};

const handleInput = e => {
  message.value = e.target.innerHTML;
};

const handleKey = (e: KeyboardEvent) => {
  resizeHeight();
};
</script>
<template>
  <div class="chat-input" @input="handleInput" @keydown="handleKey" contenteditable="true" ref="inputRef"></div>
</template>
<style lang="scss">
.chat-input {
  height: 42px;
  max-height: 200px;
}
</style>
