const { Router } = require('express');

const validationField = require('../validators/validationField');
const userController = require('../controllers/userController');
const invalidData = require('../middlewares/invalidData');

const route = Router();

route.get('/', userController.userPage);

route.post('/', validationField, invalidData, userController.registerPage);

route.patch('/', userController.updateUser);

route.delete('/', userController.deleteUser);

module.exports = route;