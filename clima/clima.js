const axios = require('axios');

let getClima = async(lat, lng) => {
    let encodeLat = encodeURI(lat);
    let encodeLng = encodeURI(lng);
    try {
        let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeLat}&lon=${encodeLng}&units=metric&appid=9d7dd84c93106012d346c27cc39b6ef4`)
        let main = resp.data.main;
        return {
            temperatura: main.temp
        }
    } catch (err) {
        return {
            temperatura: 'Error al buscar la temperatura'
        }
    }





}

module.exports = {
    getClima
}