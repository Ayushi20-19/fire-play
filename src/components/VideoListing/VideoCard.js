import React from "react";
import { useDataContext } from "../../context/data-context";
import { useHistory } from "../../context/history-context";
import { useLikes } from "../../context/likes-context";
import {
  addToLike,
  dislike,
  playBtnHandler,
  removeFromHistory,
} from "../../utils";

import styles from "./Css/videocard.module.css";

const VideoCard = ({
  id,
  title,
  thumnail,
  creator,
  date,
  isInHistoryRoute,
}) => {
  const { dataState } = useDataContext();
  const { likesState, likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const checkLikedVideo = (id) =>
    likesState.likes.some((liked) => liked._id === id);

  return (
    <>
      <div className={styles.cardWrapper} key={id}>
        <div className={styles.imgWrapper}>
          <img src={thumnail} alt='' />

          <button
            className={styles.iconPlay}
            onClick={() => playBtnHandler(id, dataState, historyDispatch)}>
            <i className={`fas fa-solid fa-play`}></i>
          </button>
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
                <button
                  className={styles.button}
                  onClick={() => dislike(id, likesDispatch)}>
                  <i class='fas fa-heart'></i>
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => addToLike(id, likesDispatch, dataState)}>
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
          {isInHistoryRoute ? (
            <button
              className={styles.crossBtn}
              onClick={() => removeFromHistory(id, historyDispatch)}>
              <i class='fas fa-solid fa-trash'></i>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { VideoCard };
