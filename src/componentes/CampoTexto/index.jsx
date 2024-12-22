import styled from "styled-components";
import { FiSettings } from "react-icons/fi"; // Ícone de configurações do react-icons/fi
import search from "./search.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px; /* Espaço entre o campo de busca e a configuração */
`;

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const CampoTextoEstilizado = styled.input`
  height: 40px;
  padding: 0 100px 0 30px; /* Espaço para o ícone de busca */
  border-radius: 20px;
  border: 1px solid #147a03;
  background-color: #7ea76c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: 16px;

  &::placeholder {
    color: black;
  }

  &:focus {
    border: 2px solid #7c3aed;
    outline: none;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const ConfiguracaoContainer = styled.div`
  display: flex;
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: center;
  width: auto; /* Ajusta dinamicamente ao conteúdo */
  height: auto; /* Ajusta dinamicamente ao conteúdo */
  cursor: pointer;

  svg {
    width: 100px; /* Largura do ícone aumentada */
    height: 25px; /* Altura do ícone ajustada para manter proporção */
    color: black; /* Define a cor preta para o ícone */
  }
`;


const CampoTexto = (props) => {
  return (
    <Wrapper>
      <ContainerEstilizado>
        <CampoTextoEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
      </ContainerEstilizado>
      <ConfiguracaoContainer>
        <FiSettings />
      </ConfiguracaoContainer>
    </Wrapper>
  );
};

export default CampoTexto;
