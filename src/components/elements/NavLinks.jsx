import { NavLink } from "react-router-dom";
export const NavLinks = ({ className, label }) => {
  return (
    <NavLink className={className} to="/">
      {label}
    </NavLink>
  );
};
