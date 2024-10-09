const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Lista de clientes
let clientes = [
    { id: 1, name: 'Joe Vogel', email: 'joe.vogel@gmail.com' },
    { id: 2, name: 'João Pedro', email: 'joao.pedro@gmail.com' },
    { id: 3, name: 'Douglas', email: 'douglas@gmail.com' }
];