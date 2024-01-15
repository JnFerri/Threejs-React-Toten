import styled from "styled-components";

const BotaoContainer = styled.button`
    border-radius : 20px;
    background-color: #1c1c1c;
    color: white;
    font-size : 14px;
    padding: 20px 20px;
`



function Botao(props){
    return(
        <BotaoContainer onClick={() => props.setProductPage(props.produto)}>{props.children}</BotaoContainer>
    )
}

export default Botao