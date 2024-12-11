import styled from "styled-components";

const ConteinerEstilizado = styled.div`
position: relative;
display: inline-block;
`

const CampoEstilizado = styled.input`
height: 56px;
padding: 12px 16px;
border-radius: 10px;
border: 2px solid;
border-color: green;
background: transparent;
box-sizing: border-box;
width: 566px;
color: black;
font-weight:400px;
font-size: 20px;
line-height:20px
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;


const CampoTexto = (props) => {
    return(
<CampoEstilizado/>
    )
}