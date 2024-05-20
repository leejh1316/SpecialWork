import { getLastDayOfMonth } from "./getLastDayOfMonth";
import { getDay } from "./getDay";
import { Calendar } from "./type";
import { convertDateToISOFormat } from "./convertDateToISOFormat";
/**
 *
 * @param year yyyy
 * @param month m (1~12)
 * @param holidays
 * @returns
 */
export const useCalendar = (
  year: number,
  month: number,
  holidays: string[] = [
    "2024-01-01", // New Year's Day
    "2024-02-09",
    "2024-02-10", // Seollal (Lunar New Year's Day)
    "2024-02-11", // Seollal Holiday
    "2024-02-12", // Seollal Holiday
    "2024-03-01", // Independence Movement Day
    "2024-05-01", // Labor Day (not a public holiday but widely observed)
    "2024-05-05", // Children's Day
    "2024-05-17", // Buddha's Birthday
    "2024-06-06", // Memorial Day
    "2024-08-15", // Liberation Day
    "2024-09-16", // Chuseok (Korean Thanksgiving Day)
    "2024-09-17", // Chuseok Holiday
    "2024-09-18", // Chuseok Holiday
    "2024-10-03", // National Foundation Day
    "2024-10-09", // Hangeul Day
    "2024-12-25", // Christmas Day
  ]
): Calendar[] => {
  const calendar: Calendar[] = [];

  // 날짜를 YYYY-MM-DD 형식으로 포맷팅하는 함수

  // 첫 날과 마지막 날을 구합니다.
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(
    year,
    month - 1,
    getLastDayOfMonth(year, month - 1)
  );

  // 이전 달의 날짜를 채우기 위한 로직
  for (let i = firstDayOfMonth.getDay(); i > 0; i--) {
    const prevDate = new Date(firstDayOfMonth);
    prevDate.setDate(prevDate.getDate() - i);
    calendar.push(createCalendarItem(prevDate, holidays));
  }

  // 현재 달 채우기
  for (let date = 1; date <= lastDayOfMonth.getDate(); date++) {
    const currentDate = new Date(year, month - 1, date);
    calendar.push(createCalendarItem(currentDate, holidays));
  }

  // 다음 달의 날짜를 채우기 위한 로직
  // for (let i = 1; i <= 6 - lastDayOfMonth.getDay(); i++) {
  //   const nextDate = new Date(lastDayOfMonth);
  //   nextDate.setDate(nextDate.getDate() + i);
  //   calendar.push(createCalendarItem(nextDate, holidays));
  // }
  let i = 1;
  while (calendar.length < 42) {
    const nextDate = new Date(lastDayOfMonth);
    nextDate.setDate(nextDate.getDate() + i);
    calendar.push(createCalendarItem(nextDate, holidays));
    i++;
  }

  return calendar;
};

// 캘린더 아이템을 생성하는 함수
function createCalendarItem(date: Date, holidays: string[]): Calendar {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: getDay(date.getDay()),
    holiday: holidays.includes(convertDateToISOFormat(date)),
  };
}
