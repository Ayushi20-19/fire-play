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

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/videos' element={<VideoListingPage />} />
          <Route path='/likedvideos' element={<LikedVideosPage />} />
          <Route path='/playlists' element={<PlaylistPage />} />
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
