import styled from "styled-components";

import CampoTexto from "../CampoTexto";
import Banner from "./Banner";

const HeaderEstilizado = styled.header`
  padding: 0.5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 200px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/Logo.png" alt="" />
      <CampoTexto/>
      <Banner
          backgroundImage={bannerBackground}
         />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
