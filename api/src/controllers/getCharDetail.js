const axios = require("axios");

const getCharDetail = (res, ID) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => {
      const {
        id,
        image,
        name,
        gender,
        species,
        status,
        origin,
        created,
        location,
      } = response.data;
      const character = {
        id: id,
        image: image,
        name: name,
        gender: gender,
        species: species,
        status: status,
        origin: origin,
        location: location,
        created: created,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharDetail;
