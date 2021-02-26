const express = require('express');
const getMockData = require('./mock');

const router = express.Router();

router.get(
  '/projects/:id',
  getMockData({
    schema: require('../schema/projects/projectDetails.json'),
    json: require('../json/projects/projectDetails.json'),
  })
);
router.get(
  '/projects',
  getMockData({
    schema: require('../schema/projects/projectsList.json'),
    json: require('../json/projects/projectsList.json'),
  })
);
router.post(
  '/projects',
  getMockData({
    schema: require('../schema/projects/projectDetails.json'),
    json: require('../json/projects/projectDetails.json'),
    createOrUpdate: true,
  })
);
router.put(
  '/projects/:id',
  getMockData({
    schema: require('../schema/projects/projectDetails.json'),
    json: require('../json/projects/projectDetails.json'),
    createOrUpdate: true,
  })
);
router.delete('/projects/:id', getMockData());

module.exports = router;
