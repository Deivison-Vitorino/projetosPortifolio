const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('Cadastro de usuários');
});

route.post('/', (req, res) => {
    res.send('Usuário cadastrado com sucesso!');
});

route.patch('/', (req, res) => {
    res.send('Usuário atualizado com sucesso');
});

route.delete('/', (req, res) => {
    res.send('Usuário excluido com sucesso!');
});

module.exports = route;