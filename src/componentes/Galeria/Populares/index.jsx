import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotosIniciais from "./fotos-populares.json"; 

const HorizontalFotos = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  padding: 4px 0px;
`;

const ImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0px;
`;

const Imagem = styled.img`
  max-width: 1000px;
  border-radius: 20px;
`;

const TituloImagem = styled.h3`
  font-size: 17px;
  font-weight: bold;;
  color: #060606;
`;

const Populares = () => {
  const fotos = fotosIniciais; 

  return (
    <section>
      <Titulo $alinhamento="left">Populares</Titulo>
      <HorizontalFotos>
        {fotos.map((foto) => (
          <ImagemContainer key={foto.id}>
            <Imagem src={foto.path} alt={foto.alt} />
            <TituloImagem>{foto.titulo}</TituloImagem>
          </ImagemContainer>
        ))}
      </HorizontalFotos>
    </section>
  );
};

export default Populares;
