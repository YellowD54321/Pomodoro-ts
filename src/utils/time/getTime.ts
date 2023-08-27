import { addDay, subtractDay } from "./calculate";
import { isValidDate } from "./check";

export const getBeginDate = (date: Date | string): Date => {
  if (!isValidDate(date)) {
    throw new Error(
      "date must be Date type or string which can be transformed to valid date."
    );
  }
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0);
  return begin;
};

export const getEndDate = (date: Date | string): Date => {
  if (!isValidDate(date)) {
    throw new Error(
      "date must be Date type or string which can be transformed to valid date."
    );
  }
  const begin = new Date(date);
  begin.setHours(23, 59, 59, 999);
  return begin;
};

export const getMinutes = (time: number) => {
  const minutes = Math.floor(time / 60);
  return minutes.toString().padStart(2, "0");
};

export const getSeconds = (time: number) => {
  const minutes = time % 60;
  return minutes.toString().padStart(2, "0");
};

export const getThisSunday = (): Date => {
  const today = new Date();
  const weekday = today.getDay();
  return subtractDay(today, weekday);
};

export const getThisSaturday = (): Date => {
  const today = new Date();
  const weekday = today.getDay();
  return addDay(today, 6 - weekday);
};

export const getThisYearBeginDate = (): Date => {
  const today = new Date();
  const year = today.getFullYear();
  return getBeginDate(new Date(year, 0, 1));
};

export const getThisYearEndDate = (): Date => {
  const today = new Date();
  const year = today.getFullYear();
  return getEndDate(new Date(year, 11, 31));
};
