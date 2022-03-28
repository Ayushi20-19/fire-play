import React from "react";
import styles from "./Css/videocard.module.css";

const VideoCard = ({
  id,
  title,
  thumnail,
  creator,
  date,
  viewCount,
  addToLike,
  dislike,
  checkLikedVideo,
}) => {
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
              {checkLikedVideo(id) ? (
                <button className={styles.button} onClick={() => dislike(id)}>
                  <i class='fas fa-heart'></i>
                </button>
              ) : (
                <button className={styles.button} onClick={() => addToLike(id)}>
                  <span>Like</span>
                </button>
              )}

              <button className={styles.button}>
                <span>
                  <i class='fas fa-bookmark'></i> Watch Later
                </span>
              </button>
              <button className={styles.button}>
                <span>
                  <i class='fas fa-folder-plus'></i> Add to Playlist
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { VideoCard };
