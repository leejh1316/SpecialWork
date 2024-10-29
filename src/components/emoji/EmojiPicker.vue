<script setup lang="ts">
import EmojiItem from "./EmojiItem.vue";
import { EmojiCategoryName } from "./EmojiType";
import { useEmoji } from "./useEmoji";
import { ref } from "vue";
import { Card } from "../common/index";
const emojiCategory = ref<EmojiCategoryName>("SMILEYS_PEOPLE");
const { emojis, representativeEmojis } = useEmoji(emojiCategory);
</script>
<template>
  <div class="emoji-picker-container">
    <Card class="emoji-picker-card">
      <div class="emoji-items-container">
        <EmojiItem v-for="emoji of emojis" :emoji="emoji" :key="emoji.code" />
      </div>
      <div class="emoji-category-container">
        <EmojiItem
          v-for="emoji of representativeEmojis"
          @click="data => (emojiCategory = data.category.name)"
          :emoji="emoji"
          :key="emoji.code"
        />
      </div>
    </Card>
  </div>
</template>
<style lang="scss">
.emoji-picker-container {
  position: relative;
  display: inline-block;
  max-width: 369px;
  width: 100%;
  font-size: 16px;
}
.emoji-picker-card {
  display: flex;
  flex-direction: column;
}
.emoji-items-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  flex-grow: 1;
}
.emoji-category-container {
  display: flex;
  height: 52px;
  overflow-x: auto;
  flex-shrink: 0;
}
</style>
