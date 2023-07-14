const { validationResult } = require('express-validator');

const invalidData = (req, res, next) => {
    const invalid = validationResult(req);
    if (!invalid.isEmpty()) {
        return res
            .status(400)
            .json({ erro: 'Falha na validação', mensagem: invalid.mapped() });
    }
    return next();
};

module.exports = invalidData;