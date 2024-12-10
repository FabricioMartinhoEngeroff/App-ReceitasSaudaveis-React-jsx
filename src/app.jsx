import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh; 
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
`;

export function App() {
  return (
    <>
      <EstilosGlobais />
      <FundoGradiente>
        
        <h1>Welcome to the App</h1>
      </FundoGradiente>
    </>
  );
}
