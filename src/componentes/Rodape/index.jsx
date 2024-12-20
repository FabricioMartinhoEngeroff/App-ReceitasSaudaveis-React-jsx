import styled from "styled-components";

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #147a03;
  color: white;
  font-size: 14px;
`;

const Footer = () => (
  <Rodape>
    <p>&copy; 2024 Receitas Saudáveis</p>
    <p>Desenvolvido por Dev Fabricio</p>
  </Rodape>
);

export default Footer;