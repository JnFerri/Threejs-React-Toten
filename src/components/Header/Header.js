import styled from "styled-components";
import LogoSuperior from "../Logo/LogoSuperior";
import NavBar from "../NavBar/NavBar";


;



const HeaderContainer = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
background-color: #25364f;
padding: 0 40px
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