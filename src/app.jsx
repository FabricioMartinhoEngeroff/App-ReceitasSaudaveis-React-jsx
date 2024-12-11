import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLatera";


const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #013220 4.16%,
    #014d28 48%,
    #026839 96.76%
  );
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <Cabecalho />
        <BarraLateral />
      </FundoGradiente>
    </>
  );
}
