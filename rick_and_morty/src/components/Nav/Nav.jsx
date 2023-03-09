import SearchBar from '../SeachBar/SearchBar';


export default function Nav(props) {
  return (
    <div className='Nav'>
    <SearchBar onSearch={props.value} />
    </div>
  );
}
