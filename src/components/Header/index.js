import React from "react";
import UserInfo from "./UserInfo";
import Theme from "./Theme";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <UserInfo />
      <Theme />
    </div>
  );
};

export default Header;
