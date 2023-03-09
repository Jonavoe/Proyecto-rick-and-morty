import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import Random from './components/Random/Random.jsx';
import React, { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = '1ffccaa0d688.4235080dc23aac8bb293';
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          const duplicado = characters.some(
            character => character.id === data.id
          );
          if (duplicado) {
            window.alert('Personaje repetido');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const randomSearch = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = '1ffccaa0d688.4235080dc23aac8bb293';
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          const duplicado = characters.some(
            character => character.id === data.id
          );
          if (duplicado) {
            window.alert('Personaje repetido');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
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
      <Random onClick={randomSearch} />
      <Nav value={onSearch} />
      <Cards characters={characters} onClose={removeCharacters} />
    </div>
  );
}

export default App;
