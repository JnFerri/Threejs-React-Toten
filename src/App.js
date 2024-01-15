
import styled from 'styled-components';
import Header from './components/Header/Header';
import BannerExaustor from './components/BannerExaustor/BannerExaustor';
import SectionVideo from './components/SectionVideo/SectionVideo';
import { useState } from 'react';
import Paragrafo from './components/Paragrafo/Paragrafo';
import Botao from './components/Botao/Botao';

const AppContainer = styled.div`
  text-align: center;
  

`


function App() {

  const [productPage, setProductPage] = useState({status:false,src:'', enviroment:'', perspective: 100,scale:1, cameraX: 0, cameraY:0, cameraZ:0})

  let content;
   if (productPage.status === true) {
  content = 
  <AppContainer>
    <Header/>
    <BannerExaustor productPage = {productPage}/> 
    <SectionVideo/>
  </AppContainer>} 
  else 
  {
  content = 
  <AppContainer>
    <Header/>
    <Paragrafo >teste</Paragrafo>
    <Botao 
    setProductPage = {setProductPage}
    produto = {{status:true,src:'./assets/files_3d/exaustor_gltf/exaustor.gltf', enviroment:'',perspective: 100,scale:1.3,cameraY:1.3}}>Clicar</Botao>
    <Botao 
    setProductPage = {setProductPage}
    produto = {{status:true , src:'./assets/files_3d/elo/elo_corrente.gltf', enviroment:'',perspective: 50, scale:20,cameraY:0.5}}>Clicar</Botao>
  </AppContainer>}
  return (
      content
  );
}

export default App;
