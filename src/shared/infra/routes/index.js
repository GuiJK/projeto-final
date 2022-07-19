const { Router } = require('express');

const usersRoutes = require('../../../modules/users/infra/routes/users.routes');
const sessionsRoutes = require('../../../modules/users/infra/routes/sessions.routes');


const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');


const routes = Router();

routes.use('/users', usersRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/transactions', transactionsRoutes);

module.exports = routes;
