import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const VideoListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CarrosselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const VideoList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 16px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem */
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

  h3 {
    margin: 8px 0 4px;
    font-size: 16px;
  }

  button {
    background: none;
    border: 1;
    font-size: 24px;
    cursor: pointer;
    color: ${(props) => (props.$favorito ? "red" : "#0a0000")};

    &:hover {
      color: red;
    }
  }
`;

const BotaoIcone = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #000000;

  &:hover {
    color: #000000;
  }

  &:disabled {
    color: #030303;
  }
`;

const GaleriaDeVideos = ({
  videos,
  aoVideoSelecionado,
  aoAlternarFavorito,
}) => {
  const videoListRef = useRef(null);
  const [podeRolarEsquerda, setPodeRolarEsquerda] = useState(false);
  const [podeRolarDireita, setPodeRolarDireita] = useState(false);

  const atualizarBotoesRolagem = () => {
    if (videoListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = videoListRef.current;
      setPodeRolarEsquerda(scrollLeft > 0);
      setPodeRolarDireita(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const rolarLista = (direcao) => {
    if (videoListRef.current) {
      const larguraRolagem = videoListRef.current.clientWidth * 0.1; 
      videoListRef.current.scrollBy({
        left: direcao === "left" ? -larguraRolagem : larguraRolagem,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    atualizarBotoesRolagem();
    const handleResize = () => atualizarBotoesRolagem();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [videos]);

  return (
    <VideoListaContainer>
      <CarrosselContainer>
        <BotaoIcone
          onClick={() => rolarLista("left")}
          disabled={!podeRolarEsquerda}
        >
          <FaArrowLeft />
        </BotaoIcone>
        <VideoList ref={videoListRef} onScroll={atualizarBotoesRolagem}>
          {videos.map((video) => (
            <VideoItem key={video.id} $favorito={video.favorita}>
              <video
                src={video.path}
                onClick={() => aoVideoSelecionado(video)}
                muted
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
              <h3>{video.title}</h3>
              <button onClick={() => aoAlternarFavorito(video.id)}>
                {video.favorita ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
            </VideoItem>
          ))}
        </VideoList>
        <BotaoIcone
          onClick={() => rolarLista("right")}
          disabled={!podeRolarDireita}
        >
          <FaArrowRight />
        </BotaoIcone>
      </CarrosselContainer>
    </VideoListaContainer>
  );
};

export default GaleriaDeVideos;
