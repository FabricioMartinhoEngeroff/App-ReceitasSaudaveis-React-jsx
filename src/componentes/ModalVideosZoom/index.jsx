import React, { useContext } from "react";
import styled from "styled-components";
import { MdClose, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { VideoContext } from "../../context/VideoContext";
import { FavoriteButton } from "../StyledComponents";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: #080808;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const VideoContainer = styled.div`
  flex: 3;

  video {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 16/9;
  }
`;

const DescriptionContainer = styled.div`
  flex: 1;
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const ModalVideoZoom = () => {
  const {
    videoSelecionado: video,
    setVideoSelecionado,
    toggleFavorite,
  } = useContext(VideoContext);

  if (!video) return null;

  const handleClose = () => setVideoSelecionado(null);

  return (
    <ModalBackground onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <MdClose />
        </CloseButton>
        <VideoContainer>
          <video controls>
            <source src={video.path} type="video/mp4" />
          </video>
        </VideoContainer>
        <DescriptionContainer>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <FavoriteButton
            $favorito={video.favorita}
            onClick={() => toggleFavorite(video.id)}
          >
            {video.favorita ? <MdFavorite /> : <MdFavoriteBorder />}
          </FavoriteButton>
        </DescriptionContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalVideoZoom;
