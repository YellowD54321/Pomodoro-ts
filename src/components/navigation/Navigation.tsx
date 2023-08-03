import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constants";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink
        to={PATH.COUNTER}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        COUNTER
      </NavLink>
      <NavLink
        to={PATH.SETTING}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        SETTING
      </NavLink>
      <NavLink
        to={PATH.LOGIN}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        LOGIN
      </NavLink>
    </nav>
  );
};

export default Navigation;
