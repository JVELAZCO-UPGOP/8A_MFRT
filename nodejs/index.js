const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');
const requestHandler = require('./request-handler');

global.recursos = {
    mascotas: [
            {tipo: "perro", nombre: "Andy", propietario: "Vince"},
            {tipo: "perro", nombre: "Andy", propietario: "Vince"},
            {tipo: "perro", nombre: "Andy", propietario: "Vince"},
            {tipo: "perro", nombre: "Andy", propietario: "Vince"},
            {tipo: "perro", nombre: "Andy", propietario: "Vince"},
    ],
};

const server = http.createServer(requestHandler); 
server.listen(5000, () => {
    console.log('El servidor esta eschuchando peticiones en http://localhost:5000');
});