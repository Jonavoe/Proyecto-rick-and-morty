import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import React, { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          const duplicado = characters.some(
            character => character.id === data.id
          );
          if (duplicado) {
            window.alert('este');
          } else {
            setCharacters(oldChars => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function removeCharacters(id) {
    setCharacters(characters => characters.filter(c => c.id !== id));
  }

  return (
    <div className={styles.App}>
      <Banner />
      <Nav value={onSearch} />
      <Cards characters={characters} onClose={removeCharacters} />
    </div>
  );
}

export default App;
