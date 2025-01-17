import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { VideoContext } from "../../context/VideoContext";
import { FavoriteButton, ArrowButton } from "../StyledComponents";

const VideoList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoItem = styled.div`
  flex-shrink: 0;
  width: 200px;
  text-align: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
  }
`;

const GaleriaDeVideos = () => {
  const { videosReels, setVideoSelecionado, toggleFavorite } =
    useContext(VideoContext);

  const videoListRef = useRef(null);

  const scroll = (direction) => {
    videoListRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ArrowButton onClick={() => scroll("left")}>
        <FaArrowLeft />
      </ArrowButton>
      <VideoList ref={videoListRef}>
        {videosReels.map((video) => (
          <VideoItem key={video.id}>
            <video
              src={video.path}
              onClick={() => setVideoSelecionado(video)} // Set selected video for zoom
              muted
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            <FavoriteButton
              $favorito={video.favorita}
              onClick={() => toggleFavorite(video.id)}
            >
              {video.favorita ? <MdFavorite /> : <MdFavoriteBorder />}
            </FavoriteButton>
          </VideoItem>
        ))}
      </VideoList>
      <ArrowButton onClick={() => scroll("right")}>
        <FaArrowRight />
      </ArrowButton>
    </div>
  );
};

export default GaleriaDeVideos;
