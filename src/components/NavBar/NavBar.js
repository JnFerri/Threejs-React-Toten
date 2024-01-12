import styled from "styled-components";

const NavBarContainer = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between
`

const Opcao = styled.li`
    margin-right:10px;
    font-size: 16px;
    list-style: none;
`

const opcoes = ['Inicio', 'Produtos', 'Catalogos']

function NavBar(){
    return(
        <NavBarContainer>
            {opcoes.map(opcao => (<Opcao>{opcao}</Opcao>))}
        </NavBarContainer>
    )
}

export default NavBar