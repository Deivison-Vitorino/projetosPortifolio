const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('Página de serviço');
});

route.post('/servico', (req, res) => {
    res.send('Serviço cadastrado com sucesso!');
});

route.patch('/servico', (req, res) => {
    res.send('Serviço atualizado com sucesso');
});

route.delete('/servico', (req, res) => {
    res.send('Serviço excluido com sucesso!');
});

module.exports = route;