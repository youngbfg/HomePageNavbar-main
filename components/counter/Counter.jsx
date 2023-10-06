import React, { useEffect } from "react";
import styles from "./counter.module.css";
import CountUp from "react-countup";
import { BiNews } from "react-icons/bi";
import { BiSolidNews } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";

const Counter = () => {
  var suffix = "";
  var prefix = "%";
  return (
    <div className={styles.body}>
      {/* -----------------1.konteyner---------------- */}
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          {/* -------------resim----------- */}
          <div className={styles.logo}>
            <BiNews />
          </div>

          {/* -----------başlık yazısı---------------- */}
          <div className={styles.count_title}>
            <p>Test0</p>

            {/* ----------------rakam------------------------- */}
            <div className={styles.number}>
              <CountUp
                duration={3.35}
                separator=","
                start={0.0}
                end={44000.0}
                prefix="%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}

      {/* -----------------2.konteyner---------------- */}
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          {/* -------------resim----------- */}
          <div className={styles.logo}>
            <BiSolidNews />
          </div>

          {/* -----------başlık yazısı---------------- */}
          <div className={styles.count_title}>
            <p>Test1</p>

            {/* ----------------rakam------------------------- */}
            <div className={styles.number}>
              <CountUp
                duration={3.35}
                separator=","
                start={0.0}
                end={44000.0}
                prefix="%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}

      {/* -----------------3.konteyner---------------- */}
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          {/* -------------resim----------- */}
          <div className={styles.logo}>
            <BsNewspaper />
          </div>

          {/* -----------başlık yazısı---------------- */}
          <div className={styles.count_title}>
            <p>Test2</p>

            {/* ----------------rakam------------------------- */}
            <div className={styles.number}>
              <CountUp
                duration={3.35}
                separator=","
                start={0.0}
                end={24000.0}
                prefix="%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}

      {/* -----------------4.konteyner---------------- */}
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          {/* -------------resim----------- */}
          <div className={styles.logo}>
            <FaNewspaper />
          </div>

          {/* -----------başlık yazısı---------------- */}
          <div className={styles.count_title}>
            <p>Test3</p>

            {/* ----------------rakam------------------------- */}
            <div className={styles.number}>
              <CountUp
                duration={3.35}
                separator=","
                start={0.0}
                end={14000.0}
                suffix="%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}
    </div>
  );
};

export default Counter;
