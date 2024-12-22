import { styled } from "styled-components";
import { useState } from "preact/hooks";

const Figure = styled.figure`
  width: 100%;
  max-width: 460px;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    width: 100%;
    border-radius: 20px;
  }

  figcaption {
    text-align: center; /* Centraliza o título */
    color: black;
    font-size: 18px;
    margin-top: 8px; /* Espaço entre a imagem e o título */
  }
`;

const Imagem = ({ foto }) => {
  const [favorito, setFavorito] = useState(foto.favorita);

  const alternarFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <Figure>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>{foto.titulo}</figcaption>
    </Figure>
  );
};

export default Imagem;
