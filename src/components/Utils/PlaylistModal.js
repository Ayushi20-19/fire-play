import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import { usePlaylistModal } from "../../context/playlistModal-context";
import { addVideoToPlaylistHandler } from "../../handlers/playlistDataHandler/addVideoToPlaylistHandler";
import createNewPlaylistHandler from "../../handlers/playlistDataHandler/createNewPlaylistHandler";
import { deleteVideoFromPlaylistHandler } from "../../handlers/playlistDataHandler/deleteVideoFromPlaylistHandler";
import styles from "./playlistmodel.module.css";

const PlaylistModal = () => {
  const {
    playlistModalState: { video },
    playlistModalDispatch,
  } = usePlaylistModal();
  const {
    playlistState: { playlist },
    playlistDispatch,
  } = usePlaylist();
  const {
    authState: { token },
  } = useAuthContext();
  const [openInput, setOpenInput] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "title",
    description: "description",
  });

  const playlistInputHandler = (e) => {
    const { name, value } = e.target;
    setNewPlaylist({ ...newPlaylist, [name]: value });
  };

  const createNewPlaylist = async (newPlaylist) => {
    try {
      const response = await createNewPlaylistHandler(
        newPlaylist,
        token,
        playlistDispatch
      );
      if (response.status === 201) {
        playlistDispatch({
          type: "CREATE_NEW_PLAYLIST",
          payload: response.data.playlists,
        });
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkVideoInPlaylist = (id) => {
    const currPlaylist = playlist.find((item) => item._id === id);
    return currPlaylist.videos.some((item) => item._id === video._id);
  };

  const playlistCheckboxInputHandler = (id) => {
    if (checkVideoInPlaylist(id)) {
      deleteVideoFromPlaylistHandler(id, video._id, token, playlistDispatch);
    } else {
      addVideoToPlaylistHandler(id, video, token, playlistDispatch);
    }
  };

  return (
    <>
      <div className={styles.mainWrapper}></div>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <div className={styles.heading}>
              <h1>Save to </h1>
              <button
                onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}>
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>
            <div className={styles.listWrapper}>
              <div className={styles.inputWrapper}>
                {playlist.map((value) => (
                  <>
                    <div className={styles.inputWrapper}>
                      <input
                        type='checkbox'
                        id={value.title}
                        checked={checkVideoInPlaylist(value._id)}
                        onChange={() => playlistCheckboxInputHandler(value._id)}
                      />
                      <label htmlFor={value.title}>{value.title}</label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className={styles.inputBox}>
              {openInput ? (
                <>
                  <input
                    type='text'
                    name='title'
                    placeholder='Enter name of the playlist'
                    onChange={(e) => playlistInputHandler(e)}
                  />
                  <input
                    type='text'
                    name='description'
                    placeholder='Enter description of the playlist'
                    onChange={(e) => playlistInputHandler(e)}
                  />

                  <button onClick={() => createNewPlaylist(newPlaylist)}>
                    Save
                  </button>
                </>
              ) : null}

              {openInput ? null : (
                <button onClick={() => setOpenInput(true)}>
                  + Create Playlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
