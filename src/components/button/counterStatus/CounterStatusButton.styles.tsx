import styled from "styled-components";
import { ButtonSizeType } from "../../../types";
import { CounterStatusButtonProps } from "./CounterStatusButton.types";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";

const Button = styled(ButtonSkeleton)<{ $size: ButtonSizeType }>`
  width: 5rem;
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
