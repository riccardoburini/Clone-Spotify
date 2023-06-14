import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Spinner } from 'react-bootstrap';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './Components/Player';
import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import Library from './Components/Library';
import { useSelector } from 'react-redux';

function App() {

  
  return (
    
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Sidebar />
          <Player />
            <div class="col-12 col-md-9 offset-md-3 mainPage">
              <CustomNavbar /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/library' element={<Library/>} />
          </Routes>
          </div>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
