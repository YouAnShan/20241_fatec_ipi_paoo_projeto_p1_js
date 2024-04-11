/* 
    Requisitos:

    1. Consulta de coordenadas latitude/longitude em função do nome de uma cidade

        > Utilizando o serviço a seguir, seu sistema deve fazer uma consulta em que
            - envia o nome de uma cidade
            - obtém as coordenadas latitude/longitude dessa cidade

    Mensagem do commit: feat(p1): obtem coords a partir de cidade
    
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

const {APPID, URLBASE, Q} = process.env


const url = `${URLBASE}?q=${Q}&appid=${APPID}`


axios.get(url)
.then(res => {
    console.log('Latitude: ')
    console.log(res.data[0].lat)
    return res
})
.then(res => {
    console.log('Longitude: ')
    console.log(res.data[0].lon)
    return res
})



//data: [{name: 'London',local_names: [Object],lat: 51.5073219,lon: -0.1276474,country: 'GB',state: 'England'}]