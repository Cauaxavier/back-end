const axios = require("axios");
const URL = "https://swapi.dev/api/people";

async function GetPeople(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  // key: value - if value is equal the key, then don't is obligatory use the value.
  GetPeople,
};

/*
GetPeople('r2')
    .then(function (result) {
        console.log('Result:', result)
    })
    .catch(function (error) {
        console.error('Error', error)
    }) */
