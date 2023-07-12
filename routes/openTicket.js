const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('Abertura de chamado');
});

route.post('/', (req, res) => {
    res.send('Chamado aberto com sucesso!');
});

route.patch('/', (req, res) => {
    res.send('Informações do chamdo salvas com sucesso!');
});

route.delete('/', (req, res) => {
    res.send('Serviço excluido com sucesso!');
});

module.exports = route;