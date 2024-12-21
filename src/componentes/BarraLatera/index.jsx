import { useState } from "react";
import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const itens = [
  { nome: "Início", icone: "/icones/home-ativo.png" },
  { nome: "Mais vistas", icone: "/icones/mais-vistas-ativo.png" },
  { nome: "Mais curtidas", icone: "/icones/mais-curtidas-ativo.png" },
  { nome: "Novas", icone: "/icones/novas-ativo.png" },
  { nome: "Surpreenda", icone: "/icones/surpreenda-me-ativo.png" },
];

const BarraLateral = () => {
  const [ativo, setAtivo] = useState(itens[0].nome);

  const handleClick = (nome) => {
    setAtivo(nome);
    console.log(`Item ativo: ${nome}`);
    // Aqui, você pode integrar lógica para chamar o backend ou atualizar outros estados globais
  };

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          {itens.map(({ nome, icone }) => (
            <ItemNavegacao
              key={nome}
              icone={icone}
              ativo={ativo === nome}
              onClick={() => handleClick(nome)}
            >
              {nome}
            </ItemNavegacao>
          ))}
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
