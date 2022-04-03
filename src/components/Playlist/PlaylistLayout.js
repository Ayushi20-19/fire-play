import { React, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import { useAuthContext } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import { getPlaylistHandler } from "../../handlers/playlistDataHandler/getPlaylistHandler";
import BannerSubNav from "../Utils/BannerSubNav";
import { PlaylistCard } from "./PlaylistCard";

const PlaylistLayout = () => {
  const [playlistRoute, setPlaylistRoute] = useState(false);
  const { playlistState, playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuthContext();

  const currentPath = useLocation();

  useEffect(async () => {
    try {
      const response = await getPlaylistHandler(token);
      if (response.status === 200) {
        playlistDispatch({
          type: "GET_PLAYLISTS",
          payload: response.data.playlists,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    currentPath.pathname === "/playlists"
      ? setPlaylistRoute(true)
      : setPlaylistRoute(false);
  }, [currentPath.key]);

  return (
    <div>
      <BannerSubNav banner={banner1} />
      {playlistRoute ? (
        playlistState.playlist.length !== 0 ? (
          <div className={`flex-wrap `}>
            {playlistState.playlist.map((item) => (
              <PlaylistCard title={item.title} id={item._id} />
            ))}
          </div>
        ) : (
          <div className={`flex-center width-100 height-30`}>
            <h1>Create your playlist and add videos </h1>
          </div>
        )
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default PlaylistLayout;
