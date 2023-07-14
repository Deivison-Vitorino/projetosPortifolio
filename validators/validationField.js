const { check } = require('express-validator');

const validationField = [
    check('usuario')
        .notEmpty()
        .isLength({ min: 8, max: 30 })
        .withMessage('Preencha seu nome de usuário com mínimo de 8 e máximo de 30 caracteres!'),
    check('email')
        .notEmpty()
        .withMessage('Insira um e-mail válido!')
        .isEmail()
        .isLength({ max: 50 }),
    check('senha')
        .notEmpty()
        .withMessage('Senha precisa ter mínimo 8 caracteres')
        .isLength({ min: 8 })
];

module.exports = validationField;