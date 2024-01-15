import { useEffect, useRef } from "react"
import styled from "styled-components";
import construtor3D from "../../../js/Contructor3D/Contructor3D";


const ExaustorContainer = styled.div`
width: 60%;
height: 80vh;
`

function Exaustor3D(props){
    
    const mountRef = useRef(null)
    useEffect( () => {
     const contrutor =    construtor3D(mountRef,props)

        
    return () => {
        const montReference = mountRef
        montReference.current.removeChild(contrutor.domElement);
    };
})
        
        
        return <ExaustorContainer ref={mountRef}></ExaustorContainer>
}


export default Exaustor3D