import React from "react";
import AllTabs from "./AllTabs/AllTabs";
import Form from "./Form";

import styles from "./styles.module.css";
import TopBar from "./TopBar/TopBar";

const Fomo = () => {
  return (
    <>
      {" "}
      <TopBar />
      <div className={`${styles.form} `}>
        <AllTabs />
        <Form />
      </div>
    </>
  );
};

export default Fomo;
