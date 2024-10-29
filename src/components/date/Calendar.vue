<script setup lang="ts">
import { computed, reactive, watchEffect } from "vue";
import { Counter, Icon, SolidButton } from "..";
import Card from "../common/Card.vue";
import { useCalendar, parseDate, WeekdayKR, Calendar, getLastDayOfMonth, isDateOutOfRange, formatDate } from "@/utils";
import { useDateStore } from "@/store";

const props = withDefaults(
  defineProps<{
    date?: string;
    min?:string;
    max?:string;
  }>(),
  { date: useDateStore().date }
);
const dateInfo = reactive(parseDate(props.date));
const dateMin = computed(()=>props?.min??'0001-01-01');
const dateMax = computed(()=>props?.max??'9999-12-31');
const calendar = computed(() => useCalendar(dateInfo.year, dateInfo.month));
const isDisabled = ({date,month,year}:Calendar)=>isDateOutOfRange(formatDate({year,month,date}),dateMin.value,dateMax.value);

function updateCalendarMonth(newMonth: number) {
  const lastDayOfMonth = getLastDayOfMonth(dateInfo.year, newMonth - 1);
  dateInfo.date = Math.min(dateInfo.date, lastDayOfMonth); // 최소 최대일 설정할때 달이 넘어가면 최소 최대에 맞게 재설정 해줘야함.
  dateInfo.year += Math.floor((newMonth - 1) / 12);
  dateInfo.month = ((newMonth + 11) % 12) + 1;
}
function handleCalendarItemClick({ date, month, year }: Calendar) {
  Object.assign(dateInfo, { date, month, year });
}
function isSelectdCalendarItem({ date, month }: Calendar): boolean {
  return dateInfo.date === date && dateInfo.month === month;
}
</script>
<template>
  <div class="calendar-container">
    <Card>
      <div class="calendar-header">
        <SolidButton>
          <span class="fs-18px fw-bold">
            <Counter :start-number="dateInfo.year" :target-number="dateInfo.year"/>.<Counter :start-number="dateInfo.month" :target-number="dateInfo.month"/>
          </span>
        </SolidButton>
        <div class="calendar-navigation">
          <SolidButton @click="updateCalendarMonth(dateInfo.month - 1)"
            ><Icon icon="chevron_left"
          /></SolidButton>
          <SolidButton @click="updateCalendarMonth(dateInfo.month + 1)"
            ><Icon icon="chevron_right"
          /></SolidButton>
        </div>
      </div>
      <div class="calendar-grid">
        <SolidButton v-for="weekDay of WeekdayKR">
          <span class="fs-14px" :data-day="weekDay">{{ weekDay }}</span>
        </SolidButton>
        <SolidButton
          v-for="calendarItem of calendar"
          @click="handleCalendarItemClick(calendarItem)"
          :disabled="isDisabled(calendarItem)"
          :always-active-background-effect="isSelectdCalendarItem(calendarItem)"
        >
          <span
            class="fs-14px"
            :data-disabled="isDisabled(calendarItem)"
            :data-day="calendarItem.day"
            :data-holiday="calendarItem.holiday"
            :data-currentMonth="calendarItem.month === dateInfo.month"
          >
            {{ calendarItem.date }}
          </span>
        </SolidButton>
      </div>
    </Card>
  </div>
</template>
<style scoped lang="scss">
.calendar-container {
  display: inline-block;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
}
.calendar-navigation {
  align-self: flex-end;
  flex-shrink: 0;
  flex-grow: 0;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  & *[data-day="토"] {
    color: rgba(var(--primary));
  }
  & *[data-holiday="true"],
  & *[data-day="일"] {
    color: rgba(var(--error));
  }
  & *[data-disabled="true"],
  & *[data-currentMonth="false"] {
    color: rgba(var(--text-tertiary));
  }
}
</style>
