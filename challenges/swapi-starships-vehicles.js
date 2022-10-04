/*

Consider the Star Wars API - https://swapi.co/
Write a function that takes in the id number of a Star Wars movie, and returns
a promise that resolves to an object of the following form:

Example swapiStarshipsVehicles(2) results in a promise that resolves to

{ title: 'The Empire Strikes Back',
  starshipNames:
   [ 'Executor',
     'Millennium Falcon',
     'Y-wing',
     'X-wing',
     'Slave 1',
     'Imperial shuttle',
     'EF76 Nebulon-B escort frigate',
     'Star Destroyer',
     'Rebel transport' ],
  vehicleNames:
   [ 'TIE/LN starfighter',
     'Snowspeeder',
     'TIE bomber',
     'AT-AT',
     'AT-ST',
     'Storm IV Twin-Pod cloud car' ]
}

where "title" is the title of the movie (only 1-7 are part of the API) and
"starshipNames" and "vehicleNames" are the names of the starships and vehicles
that appear in the movie.

--------------------------------------------------------------------------------

The API for getting a movie is : `https://swapi.co/api/films/${id}`
The API for getting a starship is : `https://swapi.co/api/starships/${id}`
The API for getting a vehicle is : `https://swapi.co/api/vehicles/${id}`

We encourage you to check the Star Wars API docs and play with its responses to
get a feel for the API.

Hint: use the axios.get function, which takes in a URL and returns a promise
that resolves to the JSON response data. It's much simpler than fetch! Check out
https://github.com/axios/axios

*/

const axios = require('axios');

const swapiStarshipsVehicles = id => {
  
};

module.exports = {swapiStarshipsVehicles};
