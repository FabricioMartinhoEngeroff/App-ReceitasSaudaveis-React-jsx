import { styled } from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
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

const Galeria = ({
  fotos = [],
  tagSelecionada,
  setTagSelecionada,
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {
  return (
    <>
      <Tags
        tagSelecionada={tagSelecionada}
        setTagSelecionada={setTagSelecionada}
      />
      <GaleriaContainer>
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
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
