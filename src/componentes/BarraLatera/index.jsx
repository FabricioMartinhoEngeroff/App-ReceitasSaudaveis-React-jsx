import styled from "styled-components";
ItemNavegacao;
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home.png"
            iconeInativo="/icones/home-inativo.png"
            ativo
          >
            Início
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo
          >
            Mais Vistos
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
