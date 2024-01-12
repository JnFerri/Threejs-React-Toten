import styled from "styled-components";
import Exaustor3D from "./Exaustor3D/Exaustor3D";
import Titulo from "../Titulo/Titulo";

const BannerExaustorContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

function BannerExaustor(){
    return(
        <BannerExaustorContainer>
            <Exaustor3D/>
            <Titulo>Exaustor 53" Nova Hélice</Titulo>
        </BannerExaustorContainer>
    )
}

export default BannerExaustor