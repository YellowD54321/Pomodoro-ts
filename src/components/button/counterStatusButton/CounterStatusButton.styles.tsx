import styled from "styled-components";
import { ButtonSizeType } from "../../../types";
import { CounterStatusButtonProps } from "./CounterStatusButton.types";

const Button = styled.button<{ $size: ButtonSizeType }>`
  width: 5rem;
  border-radius: 0.25rem;
`;

const StyledCounterStatusButton = ({
  children,
  status,
  onClick,
  size = "md",
  ...rest
}: CounterStatusButtonProps) => {
  const handleClick = () => {
    onClick(status);
  };

  return (
    <Button $size={size} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default StyledCounterStatusButton;
