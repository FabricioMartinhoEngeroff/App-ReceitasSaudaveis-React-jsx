import styled from "styled-components";
import search from "./search.png";
import Titulo from "../Titulo";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  height: 40px;
  padding: 5px 5px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #147a03;
  background-color: #d1f5d0;
  box-sizing: border-box;
  width: 500px;
  color: black;
  font-weight: 50;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = (props) => {
  return (
    <Titulo>
      Busque sua Receita Desejada
      <ContainerEstilizado>
        <CampoTextoEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
      </ContainerEstilizado>
    </Titulo>
  );
};

export default CampoTexto;
