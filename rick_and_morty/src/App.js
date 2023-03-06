import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React, { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  function removeCharacters(id) {
    setCharacters(oldChars => oldChars.filter(c => c.id !== id))
  }

  return (
    <div className='App'>
      <div className='img'>
        <img
          src='https://i.redd.it/o6cwlzg3exk41.png'
          alt='banner'
          className='banner'
        />
      </div>
      <Nav setCharacters={setCharacters} />
      <div className='cards'>
        <Cards characters={characters} onClose={removeCharacters} />
      </div>
    </div>
  );
}

export default App;
