import React, { useState } from "react";
// import logo from "../../assets/logo.svg";
import { BiSearch, BiChevronUp, BiChevronDown } from "react-icons/bi";

import { RiDownload2Line } from "react-icons/ri";
import { MdOutlineSwitchRight, MdAdd } from "react-icons/md";
import { FiMoreVertical, FiInfo, FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Header.module.css";
const Header = ({ setSidebar }) => {
  const [search, setSearch] = useState("");
  const [showSignOut, setShowSignOut] = useState(false);
  const [more, setMore] = useState(false);
  const firstCharecter = (value) => {
    const name = value.split(" ").map((el, i) => el.charAt(0));

    return name;
  };
  const dropDownItems = [
    { icon: <RiDownload2Line className={styles.icon} />, item: "Save" },
    { icon: <FiSettings className={styles.icon} />, item: "Settings" },
    { icon: <FiInfo className={styles.icon} />, item: "Info" },
    { icon: <MdAdd className={styles.icon} />, item: "Add User" },
    {
      icon: <MdOutlineSwitchRight className={styles.icon} />,
      item: "Switch User",
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.userContainer}>
        {" "}
        {/* <img src={logo} alt="#" className={styles.logo} /> */}
        <RxHamburgerMenu
          className={styles.hamburger}
          onClick={() => setSidebar(true)}
        />
        <div className={styles.userDetails}>
          <div className={styles.nameIcon}>
            <span>{firstCharecter("John Doe")}</span>
          </div>
          <div className={styles.user}>
            <span className={styles.userName}>John Doe</span>
            {showSignOut ? (
              <BiChevronUp
                className={`${styles.userName} ${styles.arrow}`}
                onClick={() => setShowSignOut((prev) => !prev)}
              />
            ) : (
              <BiChevronDown
                className={`${styles.userName} ${styles.arrow}`}
                onClick={() => setShowSignOut((prev) => !prev)}
              />
            )}
            {showSignOut && (
              <span
                className={`${styles.userName} ${styles.signOut}`}
                onClick={() => setShowSignOut((prev) => !prev)}
              >
                Sign Out
              </span>
            )}{" "}
          </div>
        </div>
        <div
          className={styles.moreButton}
          onClick={() => setMore((prev) => !prev)}
        >
          <FiMoreVertical className={styles.more} />
        </div>
        {more && (
          <div className={styles.dropDownItems}>
            {dropDownItems.map((el, i) => (
              <div
                key={i}
                className={styles.itemAndIcon}
                onClick={() => setMore((prev) => !prev)}
              >
                {el.icon}
                <span className={styles.item}>{el.item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
