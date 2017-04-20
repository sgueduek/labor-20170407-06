const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Stranger!");
});

app.get('/hello', (req, res) => {
    res.send("Hello Universe!");
});

app.listen(8080);