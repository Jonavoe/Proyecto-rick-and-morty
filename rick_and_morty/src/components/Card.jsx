import "./Card.css";
export default function Card(props) {
   const {name, species, gender, image, onClose} = props;

  return (
    <div className="card">
      <button onClick={onClose} className='btn'>X</button>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
      
      
    </div>
  );
}
