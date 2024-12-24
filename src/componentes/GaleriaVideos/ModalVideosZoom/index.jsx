import styled from "styled-components";
import {
  MdClose,
  MdFavorite,
  MdFullscreen,
  MdVolumeUp,
  MdSettings,
} from "react-icons/md";
import { FaRegClock } from "react-icons/fa"; // Ícone de duração do vídeo

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
  max-width: calc(60% + 10cm); /* Aumenta 5cm em cada lado */
  max-height: calc(30% + 10cm); /* Aumenta 5cm em cada lado */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row; /* Layout lado a lado */
  gap: 20px;
  overflow: hidden; /* Evita conteúdo fora do modal */
`;

const VideoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  video {
    width: 100%;
    max-width:100%;
    height: auto;
    border-radius: 8px;
    aspect-ratio: 12/8;
    object-fit: contain;
  }
`;

const DescriptionContainer = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1;
    text-align: left;
  }
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
  outline: none;

  &:hover {
    color: red;
  }
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const ControlIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 24px;
    color: white;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`;

const ModalVideoZoom = ({ video, aoFechar, aoAlternarFavorito }) => {
  if (!video) return null;

  return (
    <ModalBackground onClick={aoFechar}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* Botão de Fechar */}
        <CloseButton onClick={aoFechar}>
          <MdClose />
        </CloseButton>
        {/* Vídeo e controles */}
        <VideoContainer>
          <video controls>
            <source src={video.path} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          {/* Barra de controles */}
          <ControlsBar>
            <ControlIcons>
              <FaRegClock title="Duração do vídeo" />
              <MdVolumeUp title="Volume" />
              <MdFullscreen title="Tela cheia" />
              <MdSettings title="Configurações" />
            </ControlIcons>
            <MdFavorite
              title="Favoritar"
              style={{
                color: video.favorita ? "red" : "white",
                cursor: "pointer",
              }}
              onClick={() => aoAlternarFavorito(video.id)}
            />
          </ControlsBar>
        </VideoContainer>
        {/* Descrição ao lado */}
        <DescriptionContainer>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </DescriptionContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalVideoZoom;
