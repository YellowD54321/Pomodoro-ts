export const isValidDate = (date: string | Date): boolean => {
  const ms = new Date(date).getTime();
  return !isNaN(ms) && ms >= 0;
};

export const getBeginDate = (date: Date | string): Date => {
  if (!isValidDate(date)) {
    throw new Error(
      'date must be Date type or string which can be transformed to valid date.',
    );
  }
  const begin = new Date(date);
  begin.setHours(0, 0, 0, 0);
  return begin;
};

export const getEndDate = (date: Date | string): Date => {
  if (!isValidDate(date)) {
    throw new Error(
      'date must be Date type or string which can be transformed to valid date.',
    );
  }
  const begin = new Date(date);
  begin.setHours(23, 59, 59, 999);
  return begin;
};

export const isBeforeDate = (
  date: Date | string,
  endDate: Date | string,
): boolean => {
  if (!isValidDate(date)) {
    throw new Error('date is not a valid Date.');
  }
  if (!isValidDate(endDate)) {
    throw new Error('endDate is not a valid Date.');
  }
  return new Date(date).getTime() <= new Date(endDate).getTime();
};

export const isAfterDate = (
  date: Date | string,
  beginDate: Date | string,
): boolean => {
  if (!isValidDate(date)) {
    throw new Error('date is not a valid Date.');
  }
  if (!isValidDate(beginDate)) {
    throw new Error('beginDate is not a valid Date.');
  }
  return new Date(date).getTime() >= new Date(beginDate).getTime();
};

export const isDuringDate = (
  date: Date | string,
  beginDate: Date | string,
  endDate: Date | string,
): boolean => {
  if (!isValidDate(date)) {
    throw new Error('date is not a valid Date.');
  }
  if (!isValidDate(beginDate)) {
    throw new Error('beginDate is not a valid Date.');
  }
  if (!isValidDate(endDate)) {
    throw new Error('endDate is not a valid Date.');
  }
  return isAfterDate(date, beginDate) && isBeforeDate(date, endDate);
};

export const isDuringTargetDate = (
  date: Date | string,
  targetDate: Date | string,
): boolean => {
  if (!isValidDate(date)) {
    throw new Error('date is not a valid Date.');
  }
  if (!isValidDate(targetDate)) {
    throw new Error('targetDate is not a valid Date.');
  }
  return isDuringDate(date, getBeginDate(targetDate), getEndDate(targetDate));
};

export const isDuringToday = (date: Date | string): boolean => {
  if (!isValidDate(date)) {
    throw new Error('date is not a valid Date.');
  }
  return isDuringTargetDate(date, new Date());
};
