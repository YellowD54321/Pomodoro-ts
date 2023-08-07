import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CustomNavLink = styled(NavLink)`
  &.active {
    background-color: red;
  }
`;
