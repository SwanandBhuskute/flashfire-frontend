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
    <div className={styles.container}>
      <p>Hurry! {data.slotsLeft} Slots Remaining</p>
      <div className={styles.timeBox}>
        <span>{time.days} Days</span>
        <span>{time.hours} Hrs</span>
        <span>{time.mins} Mins</span>
        <span>{time.secs} Secs</span>
      </div>
      <button className={styles.bookBtn}>{data.bookNowText}</button>
    </div>
  );
};

export default CountdownClient;
