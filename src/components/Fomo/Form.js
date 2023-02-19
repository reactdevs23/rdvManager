import React, { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import CheckBox from "../Checkbox/CheckBox";
import styles from "./styles.module.css";
const Form = () => {
  const [textInput, setTextInput] = useState("");
  const [boxItem, setBoxItem] = useState("");
  const [showDropDown, setShowDropDown] = useState("");
  const [date, setDate] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [unSelectedText, setUnSelectedText] = useState("");

  const dropDownsItems = ["item1", "item2", "item3", "item4"];
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            Text-Input
          </label>
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            type="text"
            placeholder="Text-Input"
            className={styles.input}
            name="textInput"
          />
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
              value={boxItem}
              onChange={(e) => setBoxItem(e.target.value)}
            />
            <TfiArrowCircleDown className={styles.calender} />
            {showDropDown && (
              <div className={styles.dropDownItems}>
                {dropDownsItems.map((el, i) => (
                  <p
                    className={styles.dropdownItem}
                    key={i}
                    onClick={() => setBoxItem(el)}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            Date-Input
          </label>
          <div className={styles.inputs}>
            <input
              name="date"
              type="date"
              placeholder="date-input"
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <CheckBox
          label="Checkbox with text selected"
          checked={selectedText}
          setChecked={setSelectedText}
        />
        <CheckBox
          label="Checkbox with text unselected"
          checked={unSelectedText}
          setChecked={setUnSelectedText}
        />
        <div className={styles.inputContainer}>
          <label htmlFor="textInput" className={styles.label}>
            Text area
          </label>
          <div className={styles.inputs}>
            <textarea
              name="textarea"
              id=""
              cols="30"
              rows="10"
              placeholder="text-area"
              className={styles.input}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
