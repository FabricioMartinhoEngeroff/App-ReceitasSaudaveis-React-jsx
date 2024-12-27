import React, { createContext, useState, useEffect } from "react";
import videosIniciais from "../videos-reels.json";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videosReels, setVideosReels] = useState(videosIniciais);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const toggleFavorite = (id) => {
    setVideosReels((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, favorita: !video.favorita } : video
      )
    );
  };


  useEffect(() => {
    if (videoSelecionado) {
      const updatedVideo = videosReels.find((video) => video.id === videoSelecionado.id);
      if (updatedVideo) {
        setVideoSelecionado(updatedVideo);
      }
    }
  }, [videosReels]);

  return (
    <VideoContext.Provider
      value={{
        videosReels,
        videoSelecionado,
        setVideoSelecionado,
        toggleFavorite,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
