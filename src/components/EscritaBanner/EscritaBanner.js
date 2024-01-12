import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import Paragrafo from "../Paragrafo/Paragrafo";

const EscritaBannerConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width:50%;
`

function EscritaBanner(){
    return(
        <EscritaBannerConteiner>
            <Titulo>Exaustor 53" Helice Nova</Titulo>
            <Paragrafo>Estrutura fabricada em chapa galvanizada NBR 7008 CZ-275, e polímero de alta resistência;</Paragrafo>
            <Paragrafo>Sistema de vedação, feito através de asas produzidas em ACM (alumínio e polímero) de alta resistência, com proteção anti-uv;</Paragrafo>
            <Paragrafo>Possui conjunto de hélice desenvolvida em polímero altamente resistente, com design único e aerodinâmico proporcionando menos ruído e maior eficiência; </Paragrafo>
            <Paragrafo>De fácil limpeza, instalação e manuseio;</Paragrafo>
            <Paragrafo>Possui regulagem de correia de fácil acesso e simples manuseio, que deixa o equipamento mais robusto, confiável e de simples manutenção;</Paragrafo>
            <Paragrafo>Possui motor blindado de alto rendimento nas opções 1,5cv e 2,0cv;</Paragrafo>
        </EscritaBannerConteiner>
    )
}

export default EscritaBanner