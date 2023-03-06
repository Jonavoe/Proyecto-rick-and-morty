import SearchBar from '../SeachBar/SearchBar';

export default function Nav({ characters, setCharacters }) {
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  return (
    <div className='Nav'>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
