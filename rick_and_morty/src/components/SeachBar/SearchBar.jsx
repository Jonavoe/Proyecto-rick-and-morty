import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    props.onSearch(searchValue);
    setSearchValue('');
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className={styles.search}>
      <form className={styles.formSearch} onSubmit={handleFormSubmit}>
        <input
          className={styles.inputSearch}
          type='search'
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className={styles.btnSearch} type='submit'>
          AGREGAR
        </button>
      </form>
    </div>
  );
}
