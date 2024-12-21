import { styled } from "styled-components";
import BotaoIcone from "../../BotaoIcone";
import { useState } from "preact/hooks";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  width: 100%;
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #629359;
    border-radius: 0px 0px 20px 20px;
    color: black;
    padding: 12px;
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({ foto, aoZoomSolicitado }) => {
  const [favorito, setFavorito] = useState(foto.favorita);

  const alternarFavorito = () => {
    setFavorito(!favorito);
  };

  const iconeFavorito = favorito
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <Figure $expandida={false} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={alternarFavorito}>
            <img src={iconeFavorito} alt="Ícone de favorito" />
          </BotaoIcone>
          <BotaoIcone
            onClick={() => aoZoomSolicitado(foto)}
          >
            <img src="/icones/expandir.png" alt="Ícone de expandir" />
          </BotaoIcone>
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
