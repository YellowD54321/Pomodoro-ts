import styled from "styled-components";
import { CounterDroplistProps } from "./CounterDroplist.types";

const Select = styled.select`
  width: auto;
  padding: 0.5rem;
`;

const StyledCounterDroplist = ({
  children,
  value,
  onChange,
  ...rest
}: Omit<CounterDroplistProps, "initialValue">) => {
  return (
    <Select value={value} onChange={onChange} {...rest}>
      {children}
    </Select>
  );
};

export default StyledCounterDroplist;
