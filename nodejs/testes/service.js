const { get } = require("axios");
const URL = "https://swapi.dev/api/people";

async function GetPeople(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const result = await get(url);
  return result.data.results.map(MapPeople);
}

function MapPeople(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = {
  // key: value - if value is equal the key, then don't is obligatory use the value.
  GetPeople
};
