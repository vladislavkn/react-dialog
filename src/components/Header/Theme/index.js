import React, { useContext } from "react";
import { AppContext } from "../../../context";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import styles from "./theme.module.css";

const Theme = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const onToggleTheme = (event) => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme);
  };

  return (
    <div
      className={styles["theme"]}
      data-theme={theme === "light" ? "dark" : "light"}
      onClick={onToggleTheme}
    >
      {theme === "light" ? (
        <IoIosMoon className={styles["dark"]} size={20} />
      ) : (
        <IoIosSunny className={styles["yellow"]} size={20} />
      )}
    </div>
  );
};

export default Theme;
