import styled from "styled-components";

const ParagrafoContainer = styled.p`
    font-size: 16px;
    color: white;
    text-align:justify;
    padding: 0 40px
`

function Paragrafo(props){
    return(
        <ParagrafoContainer >{props.children}</ParagrafoContainer>
    )
}

export default Paragrafo