import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    props.onSearch(searchValue)
    setSearchValue('')
  
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className='search'>
      <form onSubmit={handleFormSubmit}>
        <input
          className='input-search'
          type='search'
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className='btn-search' type='submit'>
          Agregar
        </button>
      </form>
    </div>
  );
  }
