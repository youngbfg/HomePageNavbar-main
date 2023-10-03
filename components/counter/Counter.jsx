import React from "react";
import styles from "./counter.module.css";


const Counter = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          <div className={styles.col_fourth}>
            <div className={styles.end}>
              <i className={styles.fa_2x}></i>
              <h2
              
                className={styles.count_title}
                data-to="300"
                data-speed="1500"
              ></h2>
              300
            </div>
            <p className={styles.count_text}>SomeText GoesHere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
