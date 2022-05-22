import { React, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import getVideosOfPlaylistHandler from "../../handlers/playlistDataHandler/getVideosOfPlaylistHandler";
import { VideoCard } from "../VideoListing/VideoCard";

const PlaylistVideoLayout = () => {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [isInPlaylistRoute, setIsInPlaylistRoute] = useState(false);
  const {
    playlistState: { playlist },
  } = usePlaylist();
  const currentPath = useLocation();

  const {
    authState: { token },
  } = useAuthContext();
  const { playlistId } = useParams();

  const getPlaylistVideos = async () => {
    const response = await getVideosOfPlaylistHandler(playlistId, token);
    setPlaylistVideos(response.data.playlist.videos);
  };

  useEffect(() => {
    getPlaylistVideos();
  }, [playlist]);

  const checkIsInPlaylist = () => {
    currentPath.pathname === `/playlists/${playlistId}`
      ? setIsInPlaylistRoute(true)
      : setIsInPlaylistRoute(false);
  };

  useEffect(() => {
    checkIsInPlaylist();
  }, []);

  return (
    <>
      <div className={`flex-wrap `}>
        {playlistVideos.length !== 0 ? (
          playlistVideos.map((video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              creator={video.creator}
              date={video.date}
              isInPlaylistRoute={isInPlaylistRoute}
              playlistId={playlistId}
            />
          ))
        ) : (
          <div className={`flex-center width-100 height-30`}>
            <h1>No videos here, Add Video to playlist</h1>
          </div>
        )}
      </div>
    </>
  );
};

export { PlaylistVideoLayout };
