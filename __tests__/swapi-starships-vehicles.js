const axios = require('axios');
const {swapiStarshipsVehicles} = require('../challenges/swapi-starships-vehicles.js');

describe('swapiStarshipsVehicles test', () => {
  it('retrives title/starships/vehicles data from a movie id', done => {
    const res2 = {
      title: 'The Empire Strikes Back',
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
    };
    
    const res7 = {
      title: 'The Force Awakens',
      starshipNames: [ 'T-70 X-wing fighter', 'Millennium Falcon' ],
      vehicleNames: []
    };
    
    swapiStarshipsVehicles(2)
      .then(results => {
        expect(results).toEqual(res2);
        
        return swapiStarshipsVehicles(7);
      })
      .then(results => {
        expect(results).toEqual(res7);
        
        done();
      });
  }, 20000);
});

