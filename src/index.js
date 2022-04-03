import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { VideosDataProvider } from "./context/data-context";
import { LikesProvider } from "./context/likes-context";
import { HistoryProvider } from "./context/history-context";
import { PlaylistModalProvider } from "./context/playlistModal-context";
import { PlaylistProvider } from "./context/playlist-context";
import { WatchLaterProvider } from "./context/watchLater-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlaylistModalProvider>
        <VideosDataProvider>
          <AuthProvider>
            <PlaylistProvider>
              <LikesProvider>
                <WatchLaterProvider>
                  <HistoryProvider>
                    <App />
                  </HistoryProvider>
                </WatchLaterProvider>
              </LikesProvider>
            </PlaylistProvider>
          </AuthProvider>
        </VideosDataProvider>
      </PlaylistModalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
