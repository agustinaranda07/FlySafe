import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from './Components/FirstSection/FirstSection';
import Popular from './Components/Popular/Popular';
import Services from './Components/AdditionalServices/Services';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import CartContainer from './Components/Cart/CartContainer';
import app, {getProducts, uploadingProducts} from './services/firebase';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div>
      <NavBar/>
    </div>

    {/* <div>
    <Popular/>
    </div> */}

    <div>
    <FirstSection/>
    </div>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='*' element={<h2 style={{backgroundColor:"red"}}>Página no encontrada</h2>}/>
      <Route path='/cart' element={<CartContainer/>}/>
    </Routes>

    <div>
    <Services/>
    </div>

    <div>
      <Footer/>
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;

