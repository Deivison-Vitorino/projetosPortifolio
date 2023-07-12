const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('Página de usuários');
});

route.post('/usuarios', (req, res) => {
    res.send('Usuário cadastrado com sucesso!');
});

route.patch('/usuarios', (req, res) => {
    res.send('Usuário atualizado com sucesso');
});

route.delete('/usuarios', (req, res) => {
    res.send('Usuário excluido com sucesso!');
});

module.exports = route;