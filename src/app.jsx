import styled from "styled-components";
import { useState } from "preact/hooks";

import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Footer from "./componentes/Rodape";

import videosIniciais from "./videos-reels.json";
import GaleriaDeVideos from "./componentes/GaleriaDeVideos";
import ModalVideoZoom from "./componentes/GaleriaDeVideos/ModalVideosZoom";

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
  const [videosReels, setVideosReels] = useState(videosIniciais);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

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
        <ModalVideoZoom
          video={videoSelecionado}
          aoFechar={() => setVideoSelecionado(null)}
          aoAlternarFavorito={aoAlternarFavoritoVideo}
        />
        <Footer />
      </AppContainer>
    </FundoGradiente>
  );
};

export default App;
