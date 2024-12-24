import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import Titulo from "../Titulo";

const HeaderEstilizado = styled.header`
  background-color: #629359;
  padding: 20px 20px; /* Ajusta o padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: 100px;

  img {
    object-fit: contain; /* Garante que a imagem não distorce */

    max-height: 100px; /* Ajusta o tamanho para caber no header */
    border: none;
    margin: 0;
    padding: 0;
    background: none;
  }
`;

const LogoETituloContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Ajusta o espaço entre logo e título */
  overflow: hidden; /* Garante que não há espaços extras */
`;

const CampoTextoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 600px;
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <LogoETituloContainer>
        <img src="/imagens/Logo.png" alt="Logo" />
        <Titulo>Vida Longa Flix</Titulo>
      </LogoETituloContainer>
      <CampoTextoContainer>
        <CampoTexto placeholder="Pesquisar..." />
      </CampoTextoContainer>
    </HeaderEstilizado>
  );
};

export default Cabecalho;
