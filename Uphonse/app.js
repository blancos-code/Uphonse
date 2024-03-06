const express = require('express');
const database = require('./database');
const config = require('./app/config');
const initRoutes = require('./app/routes');
const initMiddleware = require('./app/middleware');
const initErrorHandlers = require('./app/errorHandlers');

const initApp = () => {
  const app = express();

  initMiddleware(app, config);
  initRoutes(app);
  initErrorHandlers(app);

  database.connect(config.MONGO_URI);

  return app;
};

const app = initApp();

module.exports = app;