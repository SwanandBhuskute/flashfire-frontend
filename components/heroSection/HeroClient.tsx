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
    <section className={styles.heroContainer}>
      <CountdownClient data={countdownData} />

      <div className={styles.heroBadge}>{data.badgeText}</div>

      <h1 className={styles.heroTitle}>
        {data.titleLine1}
        <br />
        <span className={styles.heroHighlight}>{data.titleLine2}</span>
      </h1>

      <p className={styles.heroDesc}>{data.description}</p>

      <button className={styles.heroBtn}>{data.buttonText}</button>

      <div className={styles.heroScroll}>↓</div>
    </section>
  );
};

export default HeroClient;
