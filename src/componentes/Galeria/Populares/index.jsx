import { styled } from "styled-components";
import Titulo from "../../Titulo";

import fotos from "./fotos-populares.json";

const HorizontalFotos = styled.section`
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  padding: 8px 0;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
  flex-shrink: 0; 
`;

const Botao = styled.button`
  background-color: transparent;
  color: #147a03;
  border: 2px solid #147a03;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 50%;

  margin-top: 16px;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="left">Populares</Titulo>
      <HorizontalFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </HorizontalFotos>
    </section>
  );
};

export default Populares;
