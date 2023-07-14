const userController = {
    registerPage: (req, res) => {
        return res.json('Usuário cadastrado com sucesso');
    },
    userPage: (req, res) => {
        return res.json('Página do usuário');
    },
    updateUser: (req, res) => {
        return res.json('Atualizado com sucesso!');
    },
    deleteUser: (req, res) => {
        return res.json('Excluido com sucesso!');
    },
};

module.exports = userController;