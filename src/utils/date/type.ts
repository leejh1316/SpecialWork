export type WeekDayKr = "일" | "월" | "화" | "수" | "목" | "금" | "토";
export type WeekDayEn =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export const WeekdayKR: WeekDayKr[] = [
  "일",
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
];
export const WeekdayEN: WeekDayEn[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export interface Calendar {
  year: number;
  month: number;
  date: number;
  day: WeekDayEn | WeekDayKr;
  holiday: boolean;
}
