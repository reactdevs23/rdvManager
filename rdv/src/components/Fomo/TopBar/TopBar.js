import React, { useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import { BiExport } from "react-icons/bi";

import styles from "./styles.module.css";
import AddData from "../../Modal/AddData/AddData";

const TopBar = () => {
  const [addDoc, setAddDoc] = useState(false);
  const [deletes, setDeletes] = useState(false);
  const [exports, setExport] = useState(false);

  return (
    <div className={styles.topBar}>
      <h2 className={styles.heading}>Foo</h2>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.add}`}
          onClick={() => setAddDoc((prev) => !prev)}
        >
          <MdAdd className={`${styles.icon} ${styles.addIcon}`} /> Add Doc{" "}
        </button>{" "}
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={() => setDeletes((prev) => !prev)}
        >
          {" "}
          <MdDelete className={`${styles.icon} ${styles.deleteIcon}`} /> Delete
        </button>{" "}
        <button
          className={`${styles.button} ${styles.export}`}
          onClick={() => setExport((prev) => !prev)}
        >
          <BiExport className={`${styles.icon} ${styles.exportIcon}`} />
          Export{" "}
        </button>
      </div>
      {addDoc && <AddData setModal={setAddDoc} />}
    </div>
  );
};

export default TopBar;
