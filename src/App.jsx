import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/API/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/API/ItemDetailContainer';
import ItemCardContainer from './componentes/API/ItemCardContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
