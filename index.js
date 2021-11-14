const express = require("express");

const app = express();

const fs = require('fs');

let json = fs.readFileSync('miembros.json');
let miembrosjson = JSON.parse(json);

let miembro = {
    name: 'Alvaro',
    age: 23
};

app.get('/', function (req, res) {
    res.send(miembrosjson);
});

app.get('/add', function (req, res) {
    miembrosjson.push(miembro);

    fs.writeFileSync("miembros.json", JSON.stringify(miembrosjson));
    res.send(miembrosjson);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});