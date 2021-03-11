const recursos = require ('./recursos');
const mascotas = require('./rutas/mascotas');
const veterinarios = require('./rutas/veterinarios');
const propietarios = require('./rutas/propietarios');
const consultas = require('./rutas/consultas');

module.exports =  {
    ruta: (data, callback) =>{
        callback(200, {mensaje: "esta es ruta"})
    },
    mascotas: mascotas(recursos.mascotas),
    veterinarios: veterinarios(recursos.veterinarios),
    propietarios: propietarios(recursos.propietarios),
    consultas: consultas(recursos.consultas),
    noEncontrado: (data, callback) => {
callback(404, {mensaje: "No encontrado"});
    },
};