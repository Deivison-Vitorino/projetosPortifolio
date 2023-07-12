const { Router } = require('express');

const serviceController = require('../controllers/serviceController');

const route = Router();

route.get('/', serviceController.dailyServices);

route.post('/', serviceController.closedTicket);

module.exports = route;