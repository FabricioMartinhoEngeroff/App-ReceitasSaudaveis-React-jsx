import { styled } from "styled-components";

const Titulo = styled.h2`
  color: #6A0DAD;
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
`;

export default Titulo;
