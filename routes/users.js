const { Router } = require('express');

const userController = require('../controllers/userController');

const route = Router();

route.get('/', userController.registerPage);

route.post('/', userController.userPage);

route.patch('/', userController.updateUser);

route.delete('/', userController.deleteUser);

module.exports = route;