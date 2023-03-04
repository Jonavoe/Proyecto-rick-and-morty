import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="img">
      <img src="https://i.redd.it/o6cwlzg3exk41.png" alt="banner" className="banner" />
      </div>
      <div className="cards">
        <Cards characters={characters} />
      </div>
      <div className="search">
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
