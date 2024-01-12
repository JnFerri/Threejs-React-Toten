import styled from "styled-components";
import Exaustor3D from "./Exaustor3D/Exaustor3D";

const BannerExaustorContainer = styled.div`
    displat:flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 10px 0;
    margin: 30px 30px;
    border-radius: 30px;
`

function BannerExaustor(){
    return(
        <BannerExaustorContainer>
            <Exaustor3D/>
            
        </BannerExaustorContainer>
    )
}

export default BannerExaustor