//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `el clima en ${direccion} es de ${temp.temperatura} grados`;
    } catch (err) {
        return `No se puede determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));

// clima.getClima(2, 0.0)
//     .then(resp => {
//         console.log('temperatura: ', resp);
//     })
//     .catch(e => console.log(e));