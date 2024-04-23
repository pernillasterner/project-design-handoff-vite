import { NavLink } from "react-router-dom";
import logo from "/assets/logo/logo-desktop.svg";
import { Button } from "../styles/button/Button";
import { SearchIcon } from "../../assets/Icons";

export const TopNavigation = () => {
  return (
    <header className="top-navigation flex justify-between items-center px-66 py-20 lg:bg-cyan-500 fixed w-full">
      <img src={logo} alt="Crossfit Mamas Logo" />
      <nav className="navbar flex items-center px-12">
        <ul>
          <li>
            <NavLink className="px-20 text-white hover:text-grey" to="/">
              getting started
            </NavLink>
            <NavLink className="px-20 text-white hover:text-grey" to="/">
              classes
            </NavLink>
            <NavLink className="px-20 text-white hover:text-grey" to="/">
              about us
            </NavLink>
          </li>
        </ul>
        <form className="mx-10 px-4">
          <SearchIcon />
        </form>
        <Button
          className={
            "log_in-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta  text-[25px]"
          }
          label={"log in"}
        />
      </nav>
    </header>
  );
};
