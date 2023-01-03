// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from './Components/FirstSection/FirstSection';
import Popular from './Components/Popular/Popular';
import Services from './Components/AdditionalServices/Services';


function App() {
  return (
    <main>
    <div>
      <NavBar/>
    </div>

    <div>
      <Popular/>
    </div>

    <div>
    <FirstSection/>
    </div>

    <div>
      <ItemListContainer/>
    </div>

    <div>
      <Services/>
    </div>
    </main>
  );
}

export default App;

