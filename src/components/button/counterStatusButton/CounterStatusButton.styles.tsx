import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ButtonSizeType, CounterStatusType } from "../../../types";

const Button = styled.button<{ size: ButtonSizeType }>`
  width: 5rem;
  border-radius: 0.25rem;
`;

type Props = PropsWithChildren & {
  value: CounterStatusType;
  onClick: Function;
  size?: ButtonSizeType;
  [rest: string]: any;
};

const StyledCounterStatusButton = ({
  children,
  value,
  onClick,
  size = "md",
  ...rest
}: Props) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Button size={size} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default StyledCounterStatusButton;
