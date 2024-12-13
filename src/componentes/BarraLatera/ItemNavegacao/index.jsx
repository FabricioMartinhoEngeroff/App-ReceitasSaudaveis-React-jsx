import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#000000" : "#FFFFFF")};
  font-family: ${(props) =>
    props.$ativo ? "verdana-bold" : "verdana-regular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      <span>{children}</span>
    </ItemListaEstilizado>
  );
};
export default ItemNavegacao;
