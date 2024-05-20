import { WeekDayEn, WeekDayKr, WeekdayEN, WeekdayKR } from "./type";

export const getDay = (day: number, language: "en" | "kr" = "kr"): WeekDayEn | WeekDayKr => {
  if (language === "en") return WeekdayEN[day];
  else return WeekdayKR[day];
};
