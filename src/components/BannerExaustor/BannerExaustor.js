import styled from "styled-components";
import Exaustor3D from "./Exaustor3D/Exaustor3D";

import EscritaBanner from "../EscritaBanner/EscritaBanner";

const BannerExaustorContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: rgb(39,124,182);
    background: linear-gradient(180deg, rgba(39,124,182,1) 0%, rgba(1,72,138,1) 48%, rgba(37,54,79,1) 100%);
`

function BannerExaustor(props){
    console.log(props)
    return(
        <BannerExaustorContainer>
            <Exaustor3D productPage = {props.productPage}/>
            <EscritaBanner/>
        </BannerExaustorContainer>
    )
}

export default BannerExaustor