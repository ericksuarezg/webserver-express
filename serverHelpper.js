const express = require('express'); //para crear el servido
const hbs = require('hbs'); //para tempalte y archivos hbs
const app = express() //declara una constante  que es el producto de la funcion expres
const port = process.env.PORT || 3000; // asigna el valor del puerto si esta en produccion o
// el 3000 si esta local

//a continuacion creamos un MIDLEWAIT que es una instruccion que siempre se ejecutara no importa
//la peticion que se reciba
//todos los archivos que se incoporen dentro de la carpeta 'public' estarandisponibles por el susuario
app.use(express.static(__dirname + '/public')); // toma el dominio y le agrega la carpeta 'public'

//aca se almacenan todos los tamplates que queremos llevar a algun documento 
hbs.registerPartials(__dirname + '/views/parciales');

//con esta instruccion 'express'usa la libreria 'hbs' para poder renderizar las paginas html
//que se encuentran en la carpeta 'public'
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split();
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join('');
});

app.get('/', function(req, res) {
    /*  res.send('Hello World') */

    /* let salida = {
        nombre: 'ericson',
        apelido: 'suarez',
        url: req.url //la ruta que solicita el usuario
    } */

    /*  res.send(salida);
     */


    //'render' metodo de 'express' para enviar el archivo a renderizar
    res.render('home', {
        nombre: 'ericson',

    });
})

app.get('/about', function(req, res) {
    res.render('about'), {

    };
});

app.get('/data', function(req, res) {

    res.send('Hola data');
})

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto  ${port}`);
})