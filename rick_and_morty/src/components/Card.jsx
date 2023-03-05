import "./Card.css";
export default function Card(props) {
   const {name, species, gender, image, onClose} = props;

  return (
    <div className="card">
      <div>
      <div className="btn-container">
        <button onClick={onClose} className='btn'>X</button>
      </div>
      <img src={image} alt={name} />
      </div>
      <div className="text">
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      </div>
      
      
    </div>
  );
}
