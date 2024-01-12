import './App.css';
import styled from 'styled-components';
import Exaustor3D from './components/Exaustor3D/Exaustor3D';
import Header from './components/Header/Header';

const AppContainer = styled.div`
.App {
  text-align: center;
}
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
