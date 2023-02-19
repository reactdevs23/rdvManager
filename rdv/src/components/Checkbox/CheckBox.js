import React from "react";
import styles from "./CheckBox.module.css";
import "./style.css";
const CheckBox = ({ label, checked, setChecked }) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((prev) => !prev)}
        className={styles.myCheckBox}
        id="checkbox"
      />
      <span className={styles.checkmark}></span> {label}
    </label>
  );
};

export default CheckBox;
