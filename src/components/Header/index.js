import React from "react";
import UserInfo from "./UserInfo";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <UserInfo />
    </div>
  );
};

export default Header;
