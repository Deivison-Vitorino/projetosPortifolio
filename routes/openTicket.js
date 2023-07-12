const { Router } = require('express');

const ticketController = require('../controllers/ticketController');

const route = Router();

route.get('/', ticketController.openTicketPage);

route.post('/', ticketController.openedTicket);

route.patch('/', ticketController.updatedTicket);

route.delete('/', ticketController.deletedTicket);

module.exports = route;