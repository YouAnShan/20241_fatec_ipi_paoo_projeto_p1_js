/* 
    Requisitos:

    1. Consulta de coordenadas latitude/longitude em função do nome de uma cidade

        > Utilizando o serviço a seguir, seu sistema deve fazer uma consulta em que
            - envia o nome de uma cidade
            - obtém as coordenadas latitude/longitude dessa cidade

    Mensagem do commit: feat(p1): obtem coords a partir de cidade

    -- CONCLUÍDO 11/04/2024
    
    2. Consulta de condições atuais e função de latitude/longitude
    
        > Utilizando o serviço a seguir, seu sistema deve fazer uma consulta em que
            - envia as coordenadas latitude/longitude obtidas anteriormente
            - obtém a sensaçã térmica (feels like) e descrição (description)

    Mensagem do commit: feat(p1): obtem previsao a partit de coords
    
    >> No final, gerar tag anotada. 

    Mensagem da tag: entrega(p1): conclui as atividades

*/
require('dotenv').config() 
const axios = require('axios')

const {APPID, URLBASE, Q, URLBASE2, IDIOMA, UNITS} = process.env

const url = `${URLBASE}?q=${Q}&appid=${APPID}`

let LAT, LON;

axios.get(url)
.then(res => {
    LAT = res.data[0].lat;
    console.log('Latitude: ', LAT)
    return res
})
.then(res => {
    LON = res.data[0].lon;
    console.log('Longitude: ', LON)
    const url2 = `${URLBASE2}?lat=${LAT}&lon=${LON}&appid=${APPID}&lang=${IDIOMA}&units=${UNITS}` // >> Tentei colocar fora mas ele foi compilado antes de obter a latitude e a longitude sendo executada imediatamente após a chamada da primeira URL.
    axios.get(url2)
    .then(res => {
        console.log('Sensação Térmica:',res.data.main.feels_like,'ºC')
        return res
    })
    .then(res => {
        console.log('O tempo está',res.data.weather[0].description,'!')
        return res
    })
    return res
})
.catch(error => {
    console.error('Erro:', error);
});

//data: [{name: 'London',local_names: [Object],lat: 51.5073219,lon: -0.1276474,country: 'GB',state: 'England'}]

//data: {coord: { lon: -0.1276, lat: 51.5073 }, weather: [ [Object] ], base: 'stations', main: {temp: 18.61, feels_like: 18.41, temp_min: 16.19, temp_max: 19.51, pressure: 1028, humidity: 72}, visibility: 10000, wind: { speed: 3.09, deg: 210 }, clouds: { all: 20 }, dt: 1712852070, sys: {type: 2, id: 2075535, country: 'GB', sunrise: 1712812352, sunset: 1712861397}, timezone: 3600, id: 2643743, name: 'London', cod: 200}

