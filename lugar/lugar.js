const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyAuJ_gmuMKMg1UcipEkVa55d7nG5oXxykA`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados para la ciudad ${direccion} consultada`);
    }

    let result = resp.data.results[0];
    let coors = result.geometry.location;

    return {
        direccion: result.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}