import React from "react";
import styled from "styled-components";

const Counter = styled.h1`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: center;
`;

interface CounterProps {
  minutes: number | string;
  seconds: number | string;
}

const StyledCounter = ({ minutes, seconds }: CounterProps) => {
  return <Counter>{`${minutes} : ${seconds}`}</Counter>;
};

export default StyledCounter;
