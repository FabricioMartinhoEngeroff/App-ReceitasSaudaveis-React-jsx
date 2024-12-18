import { styled } from "styled-components";

const Titulo = styled.h2`
    color: #d907f5;
    font-size: 32px;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`
    
export default Titulo