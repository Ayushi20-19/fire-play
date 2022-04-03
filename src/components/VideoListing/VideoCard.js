import React from "react";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { useHistory } from "../../context/history-context";
import { useLikes } from "../../context/likes-context";
import { usePlaylist } from "../../context/playlist-context";
import { usePlaylistModal } from "../../context/playlistModal-context";
import { deleteVideoFromPlaylistHandler } from "../../handlers/playlistDataHandler/deleteVideoFromPlaylistHandler";
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
  isInPlaylistRoute,
  playlistId,
}) => {
  const { dataState } = useDataContext();
  const { likesState, likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const { playlistModalDispatch } = usePlaylistModal();
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuthContext();
  const checkLikedVideo = (id) =>
    likesState.likes.some((liked) => liked._id === id);

  const showModel = (id, dataState) => {
    const video = dataState.videos.find((item) => item._id === id);
    playlistModalDispatch({ type: "OPEN_MODAL", payload: video });
  };

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
              <button
                className={styles.button}
                onClick={() => showModel(id, dataState)}>
                <span>Add to Playlist</span>
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
          {isInPlaylistRoute ? (
            <button
              className={styles.crossBtn}
              onClick={() =>
                deleteVideoFromPlaylistHandler(
                  playlistId,
                  id,
                  token,
                  playlistDispatch
                )
              }>
              <i class='fas fa-solid fa-trash'></i>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { VideoCard };
