const express = require("express");

const app = express();

let usuario = {
    nombre: 'Alvaro',
    edad: 18
};

app.get('/', function (req, res) {
    respuesta = {
        usuarios: [usuario]
    };
    res.send(respuesta);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});