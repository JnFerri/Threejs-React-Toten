
import styled from 'styled-components';
import Exaustor3D from './components/Exaustor3D/Exaustor3D';
import Header from './components/Header/Header';

const AppContainer = styled.div`
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(170deg, rgba(2,0,36,1) 0%, rgba(1,72,138,1) 38%, rgba(40,148,180,1) 100%);
`

function App() {
  return (
    <AppContainer>
        <Header>
        </Header>
        <Exaustor3D/>
    </AppContainer>
  );
}

export default App;
