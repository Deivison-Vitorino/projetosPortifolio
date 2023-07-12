const { Router } = require('express');

const openTicketRoutes = require('./openTicket');

const serviceRoutes = require('./service');

const usersRoutes = require('./users');

const route = Router();

route.use('/abrirChamado', openTicketRoutes);

route.use('/usuarios', usersRoutes);

route.use('/servico', serviceRoutes);

module.exports = route;
