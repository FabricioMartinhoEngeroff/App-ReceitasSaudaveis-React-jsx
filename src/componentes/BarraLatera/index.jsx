import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useState } from "react";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 
  width: 170px; 
`;

const NavegacaoContainer = styled.nav`
  margin-top: 20px; 
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
    // Integre lógica adicional aqui, se necessário
  };

  return (
    <aside>
      <NavegacaoContainer>
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
      </NavegacaoContainer>
    </aside>
  );
};

export default BarraLateral;
