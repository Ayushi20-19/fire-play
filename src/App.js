import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  VideoListingPage,
  PlaylistPage,
  HistoryPage,
  WatchLaterPage,
  LikedVideosPage,
} from "./pages";
import Login from "./components/Auth/Login";
import Mockman from "mockman-js";
import Signup from "./components/Auth/Signup";
import { PlaylistModal } from "./components/Utils/PlaylistModal";
import { usePlaylistModal } from "./context/playlistModal-context";
import PlaylistVideosPage from "./pages/PlaylistVideosPage";
import SingleVideoPage from "./pages/SingleVideoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { playlistModalState } = usePlaylistModal();
  return (
    <>
      <div className='app'>
        {playlistModalState.showModal ? <PlaylistModal /> : null}
        <ToastContainer
          position='top-right'
          autoClose={700}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/videos' element={<VideoListingPage />} />
          <Route path='/video/:videoId' element={<SingleVideoPage />} />
          <Route path='/likedvideos' element={<LikedVideosPage />} />
          <Route path='/playlists' element={<PlaylistPage />}>
            <Route path=':playlistId' element={<PlaylistVideosPage />} />
          </Route>
          <Route path='/watchlater' element={<WatchLaterPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/auth' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/mockman' element={<Mockman />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
