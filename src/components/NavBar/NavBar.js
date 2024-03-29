import styled from "styled-components";

const NavBarContainer = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between
`

const Opcao = styled.li`
    margin-right:30px;
    font-size: 16px;
    list-style: none;
    color: white;
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