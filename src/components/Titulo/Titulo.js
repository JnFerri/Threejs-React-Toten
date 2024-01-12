
import styled from "styled-components";

const TituloContainer = styled.h1`
font-size : 34px;
font-weight : bold;
text-tranform : uppercase;
color : white;
text-align : center;
width: 100%;
`

function Titulo(props){

    return(
        <TituloContainer>{props.children}</TituloContainer>
    )
}

export default Titulo