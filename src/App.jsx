import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientComponent from './components/ListClientComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClientComponent from './components/ClientComponent';

function App() {

  return (
    <>
     <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = { <ListClientComponent />}></Route>
            {/* // http://localhost:3000/clients */}
            <Route path='/clients' element = { <ListClientComponent />}></Route>
            {/* // http://localhost:3000/add-client */}
            <Route path='/add-client' element = { <ClientComponent />}></Route>
            {/* // http://localhost:3000/edit-client/1 */}
            <Route path='/edit-client/:id' element = { <ClientComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
