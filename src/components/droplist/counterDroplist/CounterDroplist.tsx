import { useState } from "react";
import StyledCounterDroplist from "./CounterDroplist.styles";
import { CounterDroplistProps } from "./CounterDroplist.types";

const CounterDroplist = ({
  children,
  onChange,
  initialValue,
}: CounterDroplistProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChangeValue: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = e.target.value;
    setValue(value);
    onChange?.(e);
  };

  return (
    <StyledCounterDroplist value={value} onChange={handleChangeValue}>
      {children}
    </StyledCounterDroplist>
  );
};

export default CounterDroplist;
