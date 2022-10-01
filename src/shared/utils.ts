import { addDays, format, getDate, startOfWeek } from "date-fns";
import { WeekDay } from "./types/Weekday";

// get week days
export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date);

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, "EEE"),
      date,
      day: getDate(date),
      month: format(date, "MMM"),
      year: format(date, "yyyy"),
    });
  }

  return final;
};

// get current month(s) and year(s)
export const getCurrentMonthAndYear = (
  firstWeekDay: WeekDay,
  lastWeekDay: WeekDay
): string => {
  const sameMonth = firstWeekDay.month === lastWeekDay.month;
  const sameYear = firstWeekDay.year === lastWeekDay.year;

  if (sameMonth && sameYear) {
    return `${firstWeekDay.month} ${firstWeekDay.year}`;
  }

  if (!sameMonth && sameYear) {
    return `${firstWeekDay.month} / ${lastWeekDay.month} ${firstWeekDay.year}`;
  }

  return `${firstWeekDay.month} ${firstWeekDay.year} / ${lastWeekDay.month} ${lastWeekDay.year}`;
};
