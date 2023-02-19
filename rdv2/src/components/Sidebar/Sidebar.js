import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { logo, foo, activeFoo, bar, activeBar } from "../../assets/images";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.css";

const Sidebar = ({ sidebar, setSidebar }) => {
  const [active, setActive] = useState(null);

  const navArray = [
    {
      icon: foo,
      activeIcon: activeFoo,
      navItem: "Foo",
      to: "/",
    },
    {
      icon: bar,
      activeIcon: activeBar,
      navItem: "Bar",
      to: "/bar",
    },
  ];
  return (
    <div className={`${styles.sidebar} ${sidebar && styles.showSidebar}`}>
      <MdClose className={styles.close} onClick={() => setSidebar(false)} />
      <Link to="/">
        {" "}
        <img src={logo} alt="#" className={styles.logo} />
      </Link>
      <div className={styles.buttonContainer}>
        {" "}
        <button className={styles.button}>+Add</button>
      </div>
      <div className={styles.navItems}>
        {navArray.map((el, i) => (
          <NavLink
            to={el.to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive && styles.navItemActive}`
            }
            key={i}
            onClick={() => setActive(i)}
          >
            {" "}
            <img
              src={active === i ? navArray[active].activeIcon : el.icon}
              alt={el.navItem}
              className={styles.icon}
            />{" "}
            {el.navItem}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
