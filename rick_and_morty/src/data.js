const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    onClose: () => window.alert("Emulamos que se cierra la card")
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    onClose: () => window.alert("Emulamos que se cierra la card")
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    onClose: () => window.alert("Emulamos que se cierra la card")
  },
  {
    id: 4,
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    onClose: () => window.alert("Emulamos que se cierra la card")
  },
];

export const Rick = {
  id: 1,
  name: "Rick Sanchez",
  species: "Human",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

export default characters;
