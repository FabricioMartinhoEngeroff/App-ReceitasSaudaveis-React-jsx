import { styled } from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <GaleriaContainer>
      <Populares />
      <SecaoFluida>
        <Titulo>Navegue pela galeria</Titulo>
        <ImagensContainer>
          {fotos.map((foto) => (
            <Imagem
              aoAlternarFavorito={aoAlternarFavorito}
              aoZoomSolicitado={aoFotoSelecionada}
              key={foto.id}
              foto={foto}
            />
          ))}
        </ImagensContainer>
      </SecaoFluida>
    </GaleriaContainer>
  );
};

export default Galeria;
