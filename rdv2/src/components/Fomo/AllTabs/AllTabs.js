import React, { useState } from "react";
import styles from "./styles.module.css";

const AllTabs = () => {
  const [active, setActive] = useState(0);
  const [charecterLength, setCharecterLength] = useState(4);
  const allTabs = [
    { tabName: "Tab1asdfasd" },
    { tabName: "Tab2asdfasd" },
    { tabName: "Tab3asdfas" },
    { tabName: "Tab4asdfa" },
    { tabName: "Tab5asdfasdfasdsadf" },
    { tabName: "Tab6asdf" },
    { tabName: "Tab7asdfas" },
    { tabName: "Tab8asdfas" },
    { tabName: "Tab9asdf" },
  ];
  return (
    <div className={styles.tabsContainer}>
      {allTabs.map((el, i) => (
        <div
          className={`${styles.tab} ${i === active && styles.activeTab}`}
          key={i}
          onClick={() => setActive(i)}
          onMouseOver={() =>
            i === active && setCharecterLength(el.tabName.length)
          }
          onMouseLeave={() => setCharecterLength(4)}
        >
          {active === i
            ? el.tabName.substring(0, charecterLength)
            : el.tabName.substring(0, 4)}
        </div>
      ))}
    </div>
  );
};

export default AllTabs;
