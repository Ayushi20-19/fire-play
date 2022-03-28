import React from "react";
import styles from "./Css/videocard.module.css";

const VideoCard = ({ id, title, thumnail, creator, date, viewCount }) => {
  return (
    <>
      <div className={styles.cardWrapper} key={id}>
        <div className={styles.imgWrapper}>
          <img src={thumnail} alt='' />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.headingdBox}>
            <h1>{title}</h1>
          </div>
          <div className={styles.textBoxWrapper}>
            <div className={styles.textBox}>
              <span>{date} </span>
              <span>/</span>
              <span>by {creator}</span>
            </div>
            <div className={`strikThroghtBtn ${styles.buttonBox}`}>
              <span>View{viewCount}</span>
              <span>like</span>
              <span>watch later</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { VideoCard };
