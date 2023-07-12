const userController = {
    registerPage: (req, res) => {
        res.json('Cadastro de usuários');
    },
    userPage: (req, res) => {
        res.json('Página do usuário');
    },
    updateUser: (req, res) => {
        res.json('Atualizado com sucesso!');
    },
    deleteUser: (req, res) => {
        res.json('Excluido com sucesso!');
    },
}

module.exports = userController;