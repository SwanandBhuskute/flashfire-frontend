"use client";
import React, { useEffect, useState } from "react";
import styles from "./countdown.module.css";

interface CountdownData {
  slotsLeft: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
  bookNowText: string;
}

interface Props {
  data: CountdownData;
}

const CountdownClient: React.FC<Props> = ({ data }) => {
  const [time, setTime] = useState({
    days: data.days,
    hours: data.hours,
    mins: data.mins,
    secs: data.secs,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let secs = prev.secs - 1;
        if (secs < 0) secs = data.secs;
        return { ...prev, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [data.secs]);

  return (
    <div className={styles.ctdContainer}>
      <div className={styles.ctdLeft}>
        <div className={styles.ctdDot}></div>
        <p className={styles.ctdText}>
          Hurry! {data.slotsLeft} Slots Remaining
        </p>
      </div>

      <div className={styles.ctdTimeBox}>
        <div className={styles.ctdTimer}>
          <span className={styles.ctdValue}>{time.days}</span>
          <span className={styles.ctdLabel}>Days</span>
        </div>
        <div className={styles.ctdTimer}>
          <span className={styles.ctdValue}>{time.hours}</span>
          <span className={styles.ctdLabel}>Hrs</span>
        </div>
        <div className={styles.ctdTimer}>
          <span className={styles.ctdValue}>{time.mins}</span>
          <span className={styles.ctdLabel}>Mins</span>
        </div>
        <div className={styles.ctdTimer}>
          <span className={styles.ctdValue}>{time.secs}</span>
          <span className={styles.ctdLabel}>Secs</span>
        </div>
      </div>

      <button className={styles.ctdBtn}>{data.bookNowText}</button>
    </div>
  );
};

export default CountdownClient;
