import { getMinutes, getSeconds } from './getTime';

describe('get minutes', () => {
  test('result is string', () => {
    const TIME = 50 * 60;
    const minutes = getMinutes(TIME);
    const isString = typeof minutes === 'string';
    expect(isString).toBe(true);
  });

  test('result is correct', () => {
    const TIME = 50 * 60;
    const minutes = getMinutes(TIME);
    expect(minutes).toBe('50');
  });

  test('add zero', () => {
    const TIME = 1 * 60;
    const minutes = getMinutes(TIME);
    expect(minutes).toBe('01');
  });
});

describe('get seconds', () => {
  test('result is string', () => {
    const TIME = 50 * 60;
    const seconds = getSeconds(TIME);
    const isString = typeof seconds === 'string';
    expect(isString).toBe(true);
  });

  test('result is correct', () => {
    const TIME = 50 * 60 - 5;
    const seconds = getSeconds(TIME);
    expect(seconds).toBe('55');
  });

  test('add zero', () => {
    const TIME = 50 * 60 - 59;
    const seconds = getSeconds(TIME);
    expect(seconds).toBe('01');
  });
});
