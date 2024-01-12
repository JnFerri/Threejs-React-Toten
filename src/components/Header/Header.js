import styled from "styled-components";
import LogoSuperior from "../Logo/LogoSuperior";
import NavBar from "../NavBar/NavBar";


;



const HeaderContainer = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
background-color: white;
`

function Header(){
    return(
        <HeaderContainer>
            <LogoSuperior></LogoSuperior>
            <NavBar></NavBar>
        </HeaderContainer>
    )
}

export default Header