// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from './Components/FirstSection/FirstSection';
import Popular from './Components/Popular/Popular';

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
    </main>
  );
}

export default App;

/*{ <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> }*/