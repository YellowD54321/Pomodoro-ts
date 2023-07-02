import React from "react";
import styled from "styled-components";

const Counter = styled.h1`
  color: white;
  background-color: black;
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
