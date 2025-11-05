"use client";
import React from "react";
import CountdownClient from "../countdown/CountdownClient";
import styles from "./hero.module.css";

interface HeroData {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
}

interface CountdownData {
  slotsLeft: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
  bookNowText: string;
}

interface Props {
  data: HeroData;
  countdownData: CountdownData;
}

const HeroClient: React.FC<Props> = ({ data, countdownData }) => {
  return (
    <section className={styles.section}>
      <CountdownClient data={countdownData} />

      <div className={styles.badge}>{data.badgeText}</div>

      <h1 className={styles.title}>
        {data.titleLine1}
        <br />
        <span className={styles.highlight}>{data.titleLine2}</span>
      </h1>

      <p className={styles.desc}>{data.description}</p>

      <button className={styles.btn}>{data.buttonText}</button>

      <div className={styles.scroll}>⬇</div>
    </section>
  );
};

export default HeroClient;
