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

// Busca de cliente por ID
app.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json(cliente);
});

// Alteração de cliente por ID
app.put('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    clientes[clienteIndex] = { id, name, email };
    res.status(200).json(clientes[clienteIndex]);
});

// Remoção de cliente por ID
app.delete('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    clientes.splice(clienteIndex, 1);
    res.status(204).send(); // Sem conteúdo
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor ProPlayer Store rodando na porta ${port}`);
});
