import React from "react";
import styles from "./playlistcard.module.css";
import bg from "../../assets/herobg.jpg";
import { useNavigate } from "react-router-dom";
import { deletePlaylistHandler } from "../../handlers/playlistDataHandler/deletePlaylistHandler";
import { usePlaylist } from "../../context/playlist-context";
import { useAuthContext } from "../../context/auth-context";
const PlaylistCard = ({ title, id }) => {
  const navigate = useNavigate();
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuthContext();
  return (
    <>
      <div className={styles.cardWrapper} key='djhdh'>
        <div className={styles.imgWrapper}>
          <img src={bg} alt='' />

          <button
            className={styles.iconPlay}
            onClick={() => navigate(`/playlists/${id}`)}>
            <i className={`fas fa-solid fa-play`}></i>
          </button>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.headingdBox}>
            <h1>{title}</h1>
          </div>
        </div>
        <button
          className={styles.crossBtn}
          onClick={() => deletePlaylistHandler(id, token, playlistDispatch)}>
          <i class='fas fa-solid fa-trash'></i>
        </button>
      </div>
    </>
  );
};

export { PlaylistCard };
