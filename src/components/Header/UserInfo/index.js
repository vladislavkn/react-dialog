import React from "react";
import styles from "./userInfo.module.css";

const UserInfo = () => (
  <div className={styles["user-info"]}>
    <div className={styles["name"]}>Ilezus Dev</div>
    <div className={styles["status"]}>
      <span className={styles["circle"]} />В сети
    </div>
  </div>
);

export default UserInfo;
