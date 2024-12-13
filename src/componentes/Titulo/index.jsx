import { styled } from "styled-components";

const Titulo = styled.h2`
    color: #e591f1;
    font-size: 32px;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`
    
export default Titulo