import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#000000" : "#FFFFFF")};
  font-family: ${(props) =>
    props.$ativo ? "verdana-bold" : "verdana-regular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const TextoComBorda = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid #629359;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #629359;
`;
const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <TextoComBorda>
        {" "}
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
      </TextoComBorda>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
