import './SearchBar.css';
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
    <div className="search">
      <input className="input-search" type="search" value={seachTerm} onChange={inputBusqueda} />
      <button className="btn-search" onClick={btnBusqueda}>Agregar</button>
    </div>
  );
}
