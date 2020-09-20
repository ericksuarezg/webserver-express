const http = require('http'); //requiriendo el modulo para poder crear un servidor web

http.createServer((req, res) => { // creando el servidor con un callback para peticiones y respuestas
    res.writeHead(200, { 'Content-Type': 'application/json' }); // agraga cabecera y el codigo de respuesta
    let salida = {
            nombre: 'ericson',
            apelido: 'suarez',
            url: req.url //la ruta que solicita el usuario
        }
        /*  res.write('hola todos'); //lo que respondera el servidor al recibir una peticion */
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080); //configurando el puerto por el que se escucharna peticiones



console.log('escuchando el puerto 8080');