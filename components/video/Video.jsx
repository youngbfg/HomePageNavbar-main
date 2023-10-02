"use client";
import styles from "./video.module.css";

const video = () => {
  return (
    <div>
      <video autoPlay loop muted className={styles.bgvideo}>
        <source src="/ukmvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default video;
