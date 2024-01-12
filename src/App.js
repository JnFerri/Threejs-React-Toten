
import styled from 'styled-components';
import Header from './components/Header/Header';
import BannerExaustor from './components/BannerExaustor/BannerExaustor';

const AppContainer = styled.div`
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(170deg, rgba(2,0,36,1) 0%, rgba(1,72,138,1) 38%, rgba(40,148,180,1) 100%);
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
        <Header/>
        <BannerExaustor/>
    </AppContainer>
  );
}

export default App;
