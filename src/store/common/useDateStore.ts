import { getKSTInISOFormat } from "@/utils";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDateStore = defineStore("date", () => {
  const isoKSTDate = ref(getKSTInISOFormat());
  const date = computed(() => isoKSTDate.value[0]);
  const time = computed(() => isoKSTDate.value[1]);
  const day = computed(()=> isoKSTDate.value[2]) 
  setInterval(() => {
    isoKSTDate.value = getKSTInISOFormat();
  }, 1000);
  return { date, time, day };
});
