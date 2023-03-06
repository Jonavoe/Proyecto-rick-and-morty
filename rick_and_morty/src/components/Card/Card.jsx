import './Card.css';

export default function Card(props) {
  const { id,name, species, gender, image, onClose } = props;

  function handDelete() {
    onClose(id);
  }

  return (
    <div className='card'>
      <div>
        <div className='btn-container'>
          <button onClick={handDelete} className='btn'>
            X
          </button>
        </div>
        <div className='img'>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className='text'>
        <h2>Name: {name}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    </div>
  );
}