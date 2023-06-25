import React, { useEffect, useRef } from "react";
import { CounterStatusType } from "../../../types";
import StyledCounter from "./BasicCounter.styles";
import { getMinutes, getSeconds } from "../../../utils/time/getTime";

type CounterProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  status: CounterStatusType;
  initialTime: number;
};

const BasicCounter = ({ time, setTime, status, initialTime }: CounterProps) => {
  const timer = useRef<null | NodeJS.Timer>(null);

  useEffect(() => {
    if (status !== "start") {
      setToInitialTime();
      clearTimer();
      return;
    }

    timer.current = setInterval(counting, 1000);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [status]);

  const counting = () => {
    setTime((preValue) => preValue - 1);
  };

  const setToInitialTime = () => {
    if (status === "pause") {
      return;
    }
    setTime(initialTime);
  };

  const clearTimer = () => {
    timer.current = null;
  };

  return (
    <StyledCounter minutes={getMinutes(time)} seconds={getSeconds(time)} />
  );
};

export default BasicCounter;
