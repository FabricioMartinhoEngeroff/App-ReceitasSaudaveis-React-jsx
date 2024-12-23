import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: column; 
  flex-grow: 1;
  padding: 8px 16px;
`;

const ModuloContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImagensContainerHorizontal = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto; /* Habilita scroll horizontal */
  padding: 8px 0;
`;

const ImagemItem = styled(Imagem)`
  flex: 0 0 auto; /* Garante que as imagens fiquem lado a lado */
  width: 400px; /* Tamanho fixo para as imagens */
  height: auto;
  border-radius: 8px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  const modulos = [
    { titulo: "Populares", fotos: fotos.slice(0, 5) },
    { titulo: "Receitas Rapidas Reels", fotos: fotos.slice(5, 10) },
    { titulo: "Favoritos", fotos: fotos.slice(10, 15) },
  ];

  return (
    <GaleriaContainer>
      {modulos.map((modulo, index) => (
        <ModuloContainer key={index}>
          <Titulo>{modulo.titulo}</Titulo>
          <ImagensContainerHorizontal>
            {modulo.fotos.map((foto) => (
              <ImagemItem
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainerHorizontal>
        </ModuloContainer>
      ))}
    </GaleriaContainer>
  );
};

export default Galeria;
