import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Buttons } from "./Buttons";

export const Navbar = () => {
  const { ToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={ToggleTheme}>Switch Theme</button>
      <Buttons />
    </div>
  );
};
