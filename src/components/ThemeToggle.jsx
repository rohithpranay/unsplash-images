import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

export const ThemeToggle = () => {
  const { isDarkTheme, handleThemeToggle } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={handleThemeToggle}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
