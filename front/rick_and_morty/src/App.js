import styles from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './views/About/About';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Detail from './views/Detail/Detail';
import Characters from './views/Landing/Characters';
import { useNavigate } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  
  function removeCharacters(id) {
    setCharacters(characters => characters.filter(c => c.id !== id));
  }
  const onSearch = id => {
    // * Base de datos Henry
    // const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    // const KEY = '1ffccaa0d688.4235080dc23aac8bb293';
    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    if (id)
    // * API original de rickandmorty
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    // * Servidor Local
    // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
    // * Base de datos Henry
    // const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    // const KEY = '1ffccaa0d688.4235080dc23aac8bb293';
    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    // * API original de rickandmorty
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    // * Servidor Local
    // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  let username = '';
  let password = '';

  
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  
  const logOut = () => {
    setAccess(false);
    navigate('/');
  };
  
  return (
    <div className={styles.App}>
      {location.pathname !== '/' && location.pathname !== '/home' && (
        <Nav value={onSearch} randomSearch={randomSearch} logOut={logOut} />
      )}
      <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Home' element={<Home />} />
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
