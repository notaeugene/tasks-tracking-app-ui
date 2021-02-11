const express = require('express');
const getMockData = require('./mock');

const router = express.Router();

router.get(
  '/projects/:id',
  getMockData(
    require('../json/projects/projectDetails.json'),
    require('../schema/projects/projectDetails.json')
  )
);
router.get(
  '/projects',
  getMockData(
    require('../json/projects/projectsList.json'),
    require('../schema/projects/projectsList.json')
  )
);

module.exports = router;
