import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { useHistory } from "../../context/history-context";
import { useLikes } from "../../context/likes-context";
import { usePlaylist } from "../../context/playlist-context";
import { usePlaylistModal } from "../../context/playlistModal-context";
import { useWatchLater } from "../../context/watchLater-context";
import { deleteVideoFromPlaylistHandler } from "../../handlers/playlistDataHandler/deleteVideoFromPlaylistHandler";
import {
  addToLike,
  dislike,
  playBtnHandler,
  removeFromHistory,
} from "../../utils";
import { addToWatchLater } from "../../utils/addToWatchLater";
import { removeFromWatchLater } from "../../utils/removeFromWatchLater";
import ReactPlayer from "react-player/youtube";
import styles from "./singlevideocard.module.css";

const SingleVideoCard = ({
  id,
  title,
  url,
  creator,
  date,
  isInHistoryRoute,
  isInPlaylistRoute,
  playlistId,
}) => {
  const navigate = useNavigate();
  const { dataState } = useDataContext();
  const { likesState, likesDispatch } = useLikes();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();
  const { playlistModalDispatch } = usePlaylistModal();
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuthContext();

  const checkLikedVideo = (id) =>
    likesState.likes.some((liked) => liked._id === id);

  const checkWatchLaterVideo = (id) =>
    watchLaterState.watchLater.some((item) => item._id === id);

  const showModel = (id, dataState) => {
    const video = dataState.videos.find((item) => item._id === id);
    playlistModalDispatch({ type: "OPEN_MODAL", payload: video });
  };
  console.log(url);
  return (
    <>
      <div className={styles.cardWrapper} key={id}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url={url}
            controls
            width='100%'
            height='100%'
            onStart={() => playBtnHandler(id, dataState, historyDispatch)}
          />
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
                  onClick={() =>
                    token ? (
                      addToLike(id, likesDispatch, dataState)
                    ) : (
                      <>{navigate("/auth")}</>
                    )
                  }>
                  <span>Like</span>
                </button>
              )}
              {checkWatchLaterVideo(id) ? (
                <button
                  className={styles.button}
                  onClick={() =>
                    removeFromWatchLater(id, watchLaterDispatch, token)
                  }>
                  <i class='fas fa-bookmark'></i>
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() =>
                    token ? (
                      addToWatchLater(id, watchLaterDispatch, dataState, token)
                    ) : (
                      <>{navigate("/auth")}</>
                    )
                  }>
                  <span>Watch Later</span>
                </button>
              )}

              <button
                className={styles.button}
                onClick={() =>
                  token ? showModel(id, dataState) : <>{navigate("/auth")}</>
                }>
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

export { SingleVideoCard };
