import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLatera";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Rodape";

import { useState, useEffect } from "react";
import fotosIniciais from "./fotos.json";


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
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotosIniciais);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [tagSelecionada, setTagSelecionada] = useState("Todas");
  const[videoReels, setVideoReels] = useState();

  const aoFechar = () => {
    setFotoSelecionada(null);
  };

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria((prevFotos) =>
      prevFotos.map((f) =>
        f.id === foto.id ? { ...f, favorita: !f.favorita } : f
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
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
              tagSelecionada={tagSelecionada}
              setTagSelecionada={setTagSelecionada}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={aoFechar}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;