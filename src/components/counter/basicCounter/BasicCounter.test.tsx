import { render, screen } from '@testing-library/react';
import { CounterStatusType } from '../../../types';
import BasicCounter from './BasicCounter';

describe('basic counter', () => {
  test('render', () => {
    const initialTime = 50 * 60;
    const time = initialTime;
    const setTime = jest.fn() as React.Dispatch<React.SetStateAction<number>>;
    const status = 'stop' as CounterStatusType;
    render(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    const counter = screen.getByText(/50.*00/);
    expect(counter).toBeInTheDocument();
  });

  test('timer counts down and reduce the value of time', async () => {
    jest.useFakeTimers();
    const initialTime = 50 * 60;
    let time = initialTime;
    const setTime = jest.fn((func) => (time = func(time)));
    const status = 'start' as CounterStatusType;
    render(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    jest.advanceTimersByTime(3000);
    expect(time).toBe(2997);
  });

  test('timer counts down and display correct time text', async () => {
    jest.useFakeTimers();
    const initialTime = 50 * 60;
    let time = initialTime;
    const setTime = jest.fn((func) => (time = func(time)));
    const status = 'start' as CounterStatusType;
    const { rerender } = render(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    jest.advanceTimersByTime(3000);
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    const counter = screen.getByText(/49.*57/);
    expect(counter).toBeInTheDocument();
  });

  test('timer pauses counting when status is pause', async () => {
    jest.useFakeTimers();
    const initialTime = 50 * 60;
    let time = initialTime;
    const setTime = jest.fn((func) => {
      if (typeof func === 'number') {
        time = func;
      } else {
        time = func(time);
      }
      return time;
    });
    let status = 'start' as CounterStatusType;
    const { rerender } = render(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    jest.advanceTimersByTime(3000);
    status = 'pause';
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    let counter = screen.getByText(/49.*57/);
    expect(counter).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    counter = screen.getByText(/49.*57/);
    expect(counter).toBeInTheDocument();
  });

  test('timer stops counting and intials time when status is stop', async () => {
    jest.useFakeTimers();
    const initialTime = 50 * 60;
    let time = initialTime;
    const setTime = jest.fn((func) => {
      if (typeof func === 'number') {
        time = func;
      } else {
        time = func(time);
      }
      return time;
    });
    let status = 'start' as CounterStatusType;
    const { rerender } = render(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    jest.advanceTimersByTime(3000);
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    let counter = screen.getByText(/49.*57/);
    expect(counter).toBeInTheDocument();
    status = 'stop';
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    jest.advanceTimersByTime(3000);
    rerender(
      <BasicCounter
        time={time}
        setTime={setTime}
        status={status}
        initialTime={initialTime}
      />,
    );
    counter = screen.getByText(/50.*00/);
    expect(counter).toBeInTheDocument();
  });
});
