const express = require('express');

const router = express.Router();

module.exports = (db) => {
  const mock = require('./mock')(db);

  router.get('/projects', mock.mockGetAll('projects'));

  return router;
};
