import { useEffect, useRef } from "react";
import StyledCounter from "./BasicCounter.styles";
import { getMinutes, getSeconds } from "../../../utils/time/getTime";
import { BasicCounterProps } from "./BasicCounter.types";

const BasicCounter = ({
  time,
  setTime,
  status,
  initialTime,
}: BasicCounterProps) => {
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
