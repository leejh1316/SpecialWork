<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { toDigits } from "@utils";
const props = withDefaults(
  defineProps<{
    targetNumber: number | string;
    startNumber?: number | string;
    delay?:boolean
  }>(),
  {
    targetNumber: 0,
    startNumber: 0,
    delay:false,
  }
);
const currentNumber = ref(props.startNumber);
const beforeCurrentNumber = ref(props.startNumber);
const targetNumber = computed(() => props.targetNumber);
const digitCurrentNumber = computed(() =>
  toDigits(currentNumber.value, "number")
);
const transitionName = computed<"counter-up" | "counter-down">(() =>
  props.targetNumber > beforeCurrentNumber.value ? "counter-up" : "counter-down"
);
watch(
  currentNumber,
  (newValue, oldValue) => {
    beforeCurrentNumber.value = oldValue ?? currentNumber.value;
  },
  { immediate: true }
);
watch(targetNumber, () => {
  currentNumber.value = targetNumber.value;
});
onMounted(() => setTimeout(() => (currentNumber.value = props.targetNumber), 550));
</script>
<template>
  <span class="counter-container">
    <TransitionGroup :name="transitionName">
      <span
        v-for="(number, index) of digitCurrentNumber"
        class="counter-item"
        :class="{delay:props.delay}"
        :style="{'--delay': `${(index+1)*50}ms`}"
        :key="`${number}.${index}`"
      >
        {{ number }}
      </span>
    </TransitionGroup>
  </span>
</template>
<style scoped lang="scss">
.counter-container {
  position: relative;
  display: inline-block;
}
.counter-item {
  display: inline-block;
}

// animation active
.counter-down-leave-active,
.counter-down-enter-active,
.counter-up-leave-active,
.counter-up-enter-active {
  transition: all ease 0.3s;
  &.delay{
    transition-delay: var(--delay);
  }
}

.counter-down-leave-active,
.counter-up-leave-active {
  position: absolute;
}

.counter-down-leave-to,
.counter-up-enter-from {
  transform: translateY(80%) scale(0.5);
  opacity: 0;
}

.counter-down-leave-from,
.counter-up-leave-from,
.counter-down-enter-to,
.counter-up-enter-to {
  transform: translateY(0%) scale(1);
  opacity: 1;
}
.counter-down-enter-from,
.counter-up-leave-to {
  transform: translateY(-80%) scale(0.5);
  opacity: 0;
}
</style>
