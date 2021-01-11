import React from "react";
import Item from "./Item";

import { normalizeDialog } from "./utils.js";
import data from "../../data.js";

import styles from "./dialog.module.css";

const Dialog = () => {
  const normalizedDialog = normalizeDialog(data);

  return (
    <div className={styles["dialog"]}>
      <div className={styles["overflow"]}>
        {normalizedDialog.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialog;
