
import styled from 'styled-components';
import Header from './components/Header/Header';
import BannerExaustor from './components/BannerExaustor/BannerExaustor';
import SectionVideo from './components/SectionVideo/SectionVideo';

const AppContainer = styled.div`
  text-align: center;
  

`

function App() {
  return (
    <AppContainer>
        <Header/>
        <BannerExaustor/>
        <SectionVideo/>
    </AppContainer>
  );
}

export default App;
