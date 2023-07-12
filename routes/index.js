const { Router } = require('express');

const serviceRoute = require('./service');

const usersRoutes = require('./users');

const route = Router();

route.use('/usuarios', usersRoutes);

route.use('/servico', serviceRoute);

module.exports = route;
