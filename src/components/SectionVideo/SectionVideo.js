import styled from "styled-components";
import Paragrafo from "../Paragrafo/Paragrafo";
import Video from "../Video/Video";

const SectionVideoContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
background-color: #25364f
`

function SectionVideo(){
    return(
        <SectionVideoContainer>
            <Paragrafo>O Avicultor Mais 2023 é um evento voltado para avicultores de corte, postura e genética; produtores integrados; representantes das agroindústrias; fornecedores de várias partes do país; profissionais do agronegócio em geral, de Minas e do Brasil, bem como autoridades do agro de entidades públicas e privadas; empresários das mais diversas áreas do agronegócio; estudantes, professores, técnicos e representantes de diversas entidades do setor. </Paragrafo>
            <Video></Video>
        </SectionVideoContainer>
    )
}

export default SectionVideo