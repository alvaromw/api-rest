const express = require("express");

const app = express();

const fs = require('fs');

let json = fs.readFileSync('miembros.json');
let miembrosjson = JSON.parse(json);

app.get('/', function (req, res) {
    res.send(miembrosjson);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});