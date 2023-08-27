import { ButtonHTMLAttributes } from "react";
import StyledFilterButton from "./FilterButton.styles";

const FilterButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledFilterButton {...props}>{children}</StyledFilterButton>;
};

export default FilterButton;
