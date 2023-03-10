import styles from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Characters from './views/Landing/Characters';
function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = id => {
    // const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    // const KEY = '1ffccaa0d688.4235080dc23aac8bb293';
    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          const duplicado = characters.some(
            character => character.id === data.id
          );
          if (duplicado) {
            window.alert('Personaje repetido');
          } else {
            setCharacters(oldChars => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const randomSearch = id => {
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
            setCharacters(oldChars => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  function removeCharacters(id) {
    setCharacters(characters => characters.filter(c => c.id !== id));
  }

  return (
    <div className={styles.App}>
      <Nav value={onSearch} randomSearch={randomSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/characters'
          element={
            <Characters
              characters={characters}
              removeCharacters={removeCharacters}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
