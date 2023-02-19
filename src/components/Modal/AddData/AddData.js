import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { TfiArrowCircleDown } from "react-icons/tfi";
import styles from "./styles.module.css";

const AddData = ({ setModal }) => {
  const [data, setData] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showDropDown, setShowDropDown] = useState("");

  const dropDownsItems = ["boxitem1", "boxitem2", "boxitem3", "boxitem4"];

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h4 className={styles.title}>Add new data</h4>
          <CgClose className={styles.icon} onClick={() => setModal(false)} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            From Date
          </label>
          <div className={styles.inputs}>
            <input
              name="fromdate"
              type="date"
              placeholder="date-input"
              className={styles.input}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            To Date
          </label>
          <div className={styles.inputs}>
            <input
              name="todate"
              type="date"
              placeholder="date-input"
              className={styles.input}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            Select Box
          </label>
          <div
            className={styles.inputs}
            onClick={() => setShowDropDown((prev) => !prev)}
          >
            <input
              name="selectbox"
              type="text"
              placeholder="Select Box"
              className={styles.input}
              value={data}
            />
            <TfiArrowCircleDown className={styles.calender} />
            {showDropDown && (
              <div className={styles.dropDownItems}>
                {dropDownsItems.map((el, i) => (
                  <p
                    className={styles.dropdownItem}
                    key={i}
                    onClick={() => setData(el)}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.cancel}`}>
            Cancel
          </button>
          <button className={`${styles.button} ${styles.save}`}>Save</button>
        </div>
      </div>{" "}
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default AddData;
