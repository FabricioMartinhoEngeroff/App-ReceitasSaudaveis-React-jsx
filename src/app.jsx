import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Galeria from "./componentes/Galeria";
import GaleriaDeVideos from "./componentes/GaleriaVideos";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Rodape";
import ModalVideoZoom from "./componentes/GaleriaVideos/ModalVideosZoom";

import fotosIniciais from "./fotos.json";
import videosIniciais from "./videos-reels.json";
import { useState } from "preact/hooks";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #aebf9f 4.16%,
    #bcc9ad 48%,
    #d3e0c5 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  flex-grow: 1;
  overflow-x: hidden;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotosIniciais); // Estado para fotos
  const [fotoSelecionada, setFotoSelecionada] = useState(null); // Estado para foto selecionada
  const [videosReels, setVideosReels] = useState(videosIniciais); // Estado para vídeos
  const [videoSelecionado, setVideoSelecionado] = useState(null); // Estado para vídeo selecionado

  // Alterna o estado de favorito de uma foto
  const aoAlternarFavoritoFoto = (foto) => {
    setFotosDaGaleria((prevFotos) =>
      prevFotos.map((f) =>
        f.id === foto.id ? { ...f, favorita: !f.favorita } : f
      )
    );
  };

  // Alterna o estado de favorito de um vídeo
  const aoAlternarFavoritoVideo = (videoId) => {
    setVideosReels((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, favorita: !video.favorita } : video
      )
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <GaleriaDeVideos
              videos={videosReels}
              aoVideoSelecionado={setVideoSelecionado}
              aoAlternarFavorito={aoAlternarFavoritoVideo}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      {/* Modal para exibir detalhes da foto */}
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavoritoFoto}
      />
      {/* Modal para exibir detalhes do vídeo */}
      <ModalVideoZoom
        video={videoSelecionado}
        aoFechar={() => setVideoSelecionado(null)}
        aoAlternarFavorito={aoAlternarFavoritoVideo}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;
