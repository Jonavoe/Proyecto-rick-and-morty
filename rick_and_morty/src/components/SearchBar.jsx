import { useState } from "react";

export default function SearchBar(props) {
  const [seachTerm, setSerachTerm] = useState('');
  const onSearch = props.onSearch

  const inputBusqueda = (input) => {
    setSerachTerm(input.target.value);
  } 

  const btnBusqueda = () => {
    onSearch(seachTerm);
  }
  return (
    <div>
      <input type="search" value={seachTerm} onChange={inputBusqueda} />
      <button onClick={btnBusqueda}>Agregar</button>
    </div>
  );
}
