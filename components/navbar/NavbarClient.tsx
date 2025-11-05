"use client";
import React from "react";
import styles from "./navbar.module.css";

interface NavData {
  brand: string;
  links: string[];
  buttonText: string;
}

interface Props {
  data: NavData;
}

const NavbarClient: React.FC<Props> = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>{data.brand}</div>

      <ul className={styles.links}>
        {data.links.map((link, i) => (
          <li key={i} className={styles.linkItem}>
            {link}
          </li>
        ))}
      </ul>

      <button className={styles.button}>{data.buttonText}</button>
    </nav>
  );
};

export default NavbarClient;
