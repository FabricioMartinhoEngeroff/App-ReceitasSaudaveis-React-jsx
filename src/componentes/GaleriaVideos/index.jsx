import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Titulo from "../Titulo";
import VideoItem from "./VideoItem";

// Estilização do container principal da galeria
const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
`;

// Container de cada módulo (como "Receitas Rápidas", "Mais Visualizados")
const ModuloContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 10px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const VideosContainerWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0 16px;
  height: 300px;
`;

// Adicione largura fixa para os itens de vídeo
const VideosContainerHorizontal = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;

  & > div {
    min-width: 200px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 100%;
`;

const Seta = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;

  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const GaleriaDeVideos = ({
  videos,
  aoVideoSelecionado,
  aoAlternarFavorito,
}) => {
  const modulos = [
    { titulo: "Receitas Rápidas - Reels", videos: videos.slice(0, 10) },
    { titulo: "Mais Visualizados", videos: videos.slice(10, 20) },
  ];

  const [scrollStates, setScrollStates] = useState(
    modulos.map(() => ({ scrollableLeft: false, scrollableRight: true }))
  );

  const refs = useRef([]);
  useEffect(() => {
    refs.current = modulos.map(() => React.createRef());
  }, [modulos]);

  const verificarScroll = (index) => {
    const container = refs.current[index]?.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isScrollableLeft = scrollLeft > 0;
      const isScrollableRight = scrollLeft + clientWidth < scrollWidth;

      setScrollStates((prev) =>
        prev.map((state, i) =>
          i === index
            ? {
                scrollableLeft: isScrollableLeft,
                scrollableRight: isScrollableRight,
              }
            : state
        )
      );
    }
  };

  const rolarPara = (direcao, index) => {
    const container = refs.current[index]?.current;
    if (container) {
      console.log(`Rolar para ${direcao} no módulo ${index}`);
      const larguraItem = 200;
      const larguraRolagem = larguraItem * 5;
      container.scrollBy({
        left: direcao === "left" ? -larguraRolagem : larguraRolagem,
        behavior: "smooth",
      });
      console.log(
        `ScrollLeft atual: ${container.scrollLeft}, ScrollWidth: ${container.scrollWidth}, ClientWidth: ${container.clientWidth}`
      );
    } else {
      console.log(`Container não encontrado para o módulo ${index}`);
    }
  };

  useEffect(() => {
    const handlers = [];
    refs.current.forEach((ref, index) => {
      const container = ref.current;
      if (container) {
        const handleScroll = () => verificarScroll(index);
        container.addEventListener("scroll", handleScroll);
        verificarScroll(index);
        handlers.push(() =>
          container.removeEventListener("scroll", handleScroll)
        );
      }
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, [modulos]);

  return (
    <GaleriaContainer>
      {modulos.map((modulo, index) => (
        <ModuloContainer key={index}>
          <Titulo>{modulo.titulo}</Titulo>
          <VideosContainerWrapper>
            <Seta
              className="left"
              onClick={() => rolarPara("left", index)}
              disabled={!scrollStates[index]?.scrollableLeft}
            >
              <FaArrowLeft />
            </Seta>
            <VideosContainerHorizontal ref={refs.current[index]}>
              {modulo.videos.map((video) => (
                <VideoItem
                  key={video.id}
                  video={video}
                  aoVideoSelecionado={aoVideoSelecionado}
                  aoAlternarFavorito={aoAlternarFavorito}
                />
              ))}
            </VideosContainerHorizontal>
            <Seta
              className="right"
              onClick={() => rolarPara("right", index)}
              disabled={!scrollStates[index]?.scrollableRight}
            >
              <FaArrowRight />
            </Seta>
          </VideosContainerWrapper>
        </ModuloContainer>
      ))}
    </GaleriaContainer>
  );
};

export default GaleriaDeVideos;
