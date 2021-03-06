const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');

module.exports = (req, res) => {
    //1. Obtener url desde el objeto request
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);

    //2. Obtener la ruta
    const ruta = urlParseada.pathname;

    //3.Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');

    //3.1 Obtener el metodo http
    const metodo = req.method.toLowerCase();
    //paso 3.1.1 Dar permisos de CORS escribiendo los headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "OPTIONS, GET, PUT, DELETE, POST"
    );
    //3.1.2 Dar respuesta inmediata cuando el metodo sea options
    if(metodo === 'options'){
        res.writeHead(204);
        res.end();
        return;
    }
    //3.2 Obtener variales del query url
    const { query = {} } = urlParseada;
    //3.3. Obtener headers
    const { headers = {} } = req;
    console.log({ headers});
    //3.4 Obtenet playload en el caso de haber uno
    const decoder = new StringDecoder("utf-8");
    let buffer = "";
    //3.4.1 ir acumulando la datos cuando el request reciba un payload
    req.on("data", (data) => {
        buffer += decoder.write(data);
    });
    //3.4.2 terminar de acumular datos y decirle al decoder que finalice
    req.on("end", () => {
        buffer += decoder.end();

        if(headers["content-type"] === "application/json"){
            buffer = JSON.parse(buffer);
        }
    //3.4.3 Revisar si tiene subrutas en este caso el indice del array
        if(rutaLimpia.indexOf("/") > -1){
            var [rutaPrincipal, indice] = rutaLimpia.split("/");
        }
    //3.5 Ordenar la data del request
    const data = {
        indice,
        ruta: rutaPrincipal || rutaLimpia,
        query,
        metodo,
        headers,
        payload: buffer,
    };


    //3.6 Elegir manejador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
    let handler;
    if(data.ruta &&
        enrutador[data.ruta] &&
        enrutador[data.ruta] [metodo]){
        handler = enrutador[data.ruta][metodo];
    }else{
        handler = enrutador.noEncontrado;
    }
    console.log("handler", handler);

    //4. ejecutar handler (manejador) para enviar la respuesta
    if(typeof handler === "function"){
        handler(data, (statusCode = 200, mensaje) =>{
            const respuesta = JSON.stringify(mensaje);
            res.setHeader("Content-Type", "application/json");
            res.writeHead(statusCode);
            //Linea en donde realmente ya estamos respondiendo a la aplicacion cliente
            res.end(respuesta);
        }); 
    }
    });
};