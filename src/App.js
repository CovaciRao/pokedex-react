import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Homepage from './pages/Homepage';
import PokemonDetails from './pages/PokemonDetails';

const App = () => {
  return(
    <Router>
      <Container>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/pokemon/:id' element={<PokemonDetails />}/>
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
