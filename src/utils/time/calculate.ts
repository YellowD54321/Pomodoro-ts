import dayjs from "dayjs";
import { isValidDate } from "./check";

const METHOD = {
  ADD: "add",
  SUB: "subtract",
} as const;

type Method = (typeof METHOD)[keyof typeof METHOD];

const UNIT = {
  SECOND: "second",
  MINUTE: "minute",
  HOUR: "hour",
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
  YEAR: "year",
} as const;

type Unit = (typeof UNIT)[keyof typeof UNIT];

const checkIsValidDate = (date: Date | string) => {
  if (!isValidDate(date)) {
    throw new Error(
      "date must be Date type or string which can be transformed to valid date."
    );
  }
};

export const calculateDate = (
  date: Date,
  number: number,
  method: Method,
  unit: Unit
): Date => {
  let time;
  switch (method) {
    case METHOD.ADD:
      time = dayjs(date).add(number, unit);
      break;
    case METHOD.SUB:
      time = dayjs(date).subtract(number, unit);
      break;
    default:
      break;
  }

  if (!time || !isValidDate(time.toString())) {
    throw new Error("calculateDate return invalid date.");
  }

  return new Date(time.toString());
};

export const calculateYear = (date: Date, number: number, method: Method) => {
  return calculateDate(date, number, method, "year");
};

export const addYear = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateYear(new Date(date), number, METHOD.ADD);
};

export const subtractYear = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateYear(new Date(date), number, METHOD.SUB);
};

export const calculateMonth = (date: Date, number: number, method: Method) => {
  return calculateDate(date, number, method, "month");
};

export const addMonth = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateMonth(new Date(date), number, METHOD.ADD);
};

export const subtractMonth = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateMonth(new Date(date), number, METHOD.SUB);
};

export const calculateDay = (date: Date, number: number, method: Method) => {
  return calculateDate(date, number, method, "day");
};

export const addDay = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateDay(new Date(date), number, METHOD.ADD);
};

export const subtractDay = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateDay(new Date(date), number, METHOD.SUB);
};

export const calculateMinue = (date: Date, number: number, method: Method) => {
  return calculateDate(date, number, method, "minute");
};

export const addMinite = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateMinue(new Date(date), number, METHOD.ADD);
};

export const subtractMinite = (date: Date | string, number: number) => {
  checkIsValidDate(date);
  return calculateMinue(new Date(date), number, METHOD.SUB);
};
