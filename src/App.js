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

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos' element={<VideoListingPage />} />
        <Route path='/likedvideos' element={<LikedVideosPage />} />
        <Route path='/playlists' element={<PlaylistPage />} />
        <Route path='/watchlater' element={<HistoryPage />} />
        <Route path='/history' element={<WatchLaterPage />} />
      </Routes>
    </div>
  );
}

export default App;
