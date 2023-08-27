import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
`;

const StyledWorkContentInput = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <Input {...props} />;
};

export default StyledWorkContentInput;
