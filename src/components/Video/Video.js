import styled from "styled-components";

const VideoContainer = styled.video`
    width: 60%;
`

function Video(){
    return(
    <VideoContainer src="assets\videos\Exaustor-Video.mp4" autoPlay muted loop></VideoContainer>
    )
}

export default Video