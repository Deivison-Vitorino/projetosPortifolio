const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('Serviços do dia');
});

route.post('/', (req, res) => {
    res.send('Fechamento de chamado');
});

route.patch('/', (req, res) => {
    res.send('Reagendar Serviço');
});

route.delete('/', (req, res) => {
    res.send('Serviço excluido com sucesso!');
});

module.exports = route;