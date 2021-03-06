const express = require('express');
const path = require('path');
const app = express();

// Servidor
app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/berners-lee.html'));
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/clarke.html'));
});

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/hamilton.html'));
});

app.get('/hooper', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/hooper.html'));
});

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/turing.html'));
});

// Archivos static
app.use(express.static(path.join(__dirname, 'DH-Heroes/public')));