import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importa os ícones
import Titulo from "../Titulo";
import VideoItem from "./VideoItem";
import { useRef, useState, useEffect } from "react";

const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  max-width: 100%; /* Limita a largura ao tamanho da tela */
  overflow: hidden; /* Previne o estouro do conteúdo */
`;

const ModuloContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding:0 10px;
  max-width: 100%; 
  overflow: hidden;
`;

const VideosContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0 16px;
`;

const VideosContainerHorizontal = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto; 
  white-space: nowrap; 
  padding: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; 
  }

  max-width: 100%; 
`;
const Seta = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  padding: 8px;

  &.left {
    left: 0; /* Alinha a seta ao limite esquerdo do contêiner */
    margin-left: 8px; /* Espaço interno */
  }

  &.right {
    right: 0; /* Alinha a seta ao limite direito do contêiner */
    margin-right: 8px; /* Espaço interno */
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
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
  const [moduloRefs, setModuloRefs] = useState([]);

  // Função para rolar a lista
  const rolarPara = (direcao, ref) => {
    if (ref.current) {
      const largura = ref.current.offsetWidth;
      ref.current.scrollBy({
        left: direcao === "left" ? -largura : largura,
        behavior: "smooth",
      });
    }
  };

  // Atualiza os estados de scroll para cada módulo
  const verificarScroll = (ref, index) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setModuloRefs((prev) =>
        prev.map((modulo, i) =>
          i === index
            ? {
                ...modulo,
                scrollableLeft: scrollLeft > 0,
                scrollableRight: scrollLeft + clientWidth < scrollWidth,
              }
            : modulo
        )
      );
    }
  };

  useEffect(() => {
    const refs = modulos.map(() => ({
      ref: useRef(null),
      scrollableLeft: false,
      scrollableRight: true,
    }));
    setModuloRefs(refs);

    refs.forEach((modulo, index) => {
      if (modulo.ref.current) {
        modulo.ref.current.addEventListener("scroll", () =>
          verificarScroll(modulo.ref, index)
        );
      }
    });

    return () => {
      refs.forEach((modulo) => {
        if (modulo.ref.current) {
          modulo.ref.current.removeEventListener("scroll", verificarScroll);
        }
      });
    };
  }, []);

  const modulos = [
    { titulo: "Receitas Rápidas - Reels", videos: videos.slice(0, 10) },
    { titulo: "Mais Visualizados", videos: videos.slice(10, 20) },
  ];

  return (
    <GaleriaContainer>
      {modulos.map((modulo, index) => (
        <ModuloContainer key={index}>
          <Titulo>{modulo.titulo}</Titulo>
          <VideosContainerWrapper>
            {/* Seta para a esquerda */}
            <Seta
              className="left"
              onClick={() => rolarPara("left", moduloRefs[index]?.ref)}
              disabled={!moduloRefs[index]?.scrollableLeft}
            >
              <FaArrowLeft /> {/* Ícone da seta para a esquerda */}
            </Seta>
            {/* Contêiner dos vídeos */}
            <VideosContainerHorizontal ref={moduloRefs[index]?.ref}>
              {modulo.videos.map((video) => (
                <VideoItem
                  key={video.id}
                  video={video}
                  aoVideoSelecionado={aoVideoSelecionado}
                  aoAlternarFavorito={aoAlternarFavorito}
                />
              ))}
            </VideosContainerHorizontal>
            {/* Seta para a direita */}
            <Seta
              className="right"
              onClick={() => rolarPara("right", moduloRefs[index]?.ref)}
              disabled={!moduloRefs[index]?.scrollableRight}
            >
              <FaArrowRight /> {/* Ícone da seta para a direita */}
            </Seta>
          </VideosContainerWrapper>
        </ModuloContainer>
      ))}
    </GaleriaContainer>
  );
};

export default GaleriaDeVideos;
