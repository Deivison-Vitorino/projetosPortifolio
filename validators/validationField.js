const { check } = require('express-validator');

const validationField = [
    check('nome')
        .notEmpty()
        .withMessage('Preencha seu nome!'),
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('Insira um e-mail válido!')
        .isLength({ max: 50 }),
    check('senha')
        .notEmpty()
        .isStrongPassword({ minLength: 8 })
        .withMessage('Senha precisa ter mínimo 8 caracteres')
];

module.exports = validationField;