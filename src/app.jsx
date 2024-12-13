import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLatera";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner_image.png";
import Galeria from "./componentes/Galeria";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #aebf9f 4.16%, /* Verde claro com mais saturação */
    #bcc9ad 48%, /* Verde intermediário */
    #d3e0c5 96.76% /* Verde claro e suave */
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
`

export function App() {
  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner
            texto="Logevidade e Qualidade De Vida"
            backgroundImage={bannerBackground}
          />
            <Galeria/>
          </ConteudoGaleria>
          </MainContainer>
        </AppContainer>
      </FundoGradiente>
    </>
  );
}
