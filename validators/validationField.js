const { check } = require('express-validator');

const validationField = [
    check('nome')
        .notEmpty()
        .withMessage('Preencha seu nome!'),
    check('email')
        .notEmpty()
        .withMessage('Insira um e-mail válido!')
        .isEmail()
        .isLength({ max: 50 }),
    check('senha')
        .notEmpty()
        .withMessage('Senha precisa ter mínimo 8 caracteres')
];

module.exports = validationField;