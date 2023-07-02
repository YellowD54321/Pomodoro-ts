import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ButtonSizeType, CounterStatusType } from "../../../types";

const Button = styled.button<{ size: ButtonSizeType }>`
  width: 5rem;
  border-radius: 0.25rem;
`;

interface Props extends PropsWithChildren {
  status: CounterStatusType;
  onClick: Function;
  size?: ButtonSizeType;
  [rest: string]: any;
}

const StyledCounterStatusButton = ({
  children,
  status,
  onClick,
  size = "md",
  ...rest
}: Props) => {
  const handleClick = () => {
    onClick(status);
  };

  return (
    <Button size={size} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default StyledCounterStatusButton;
