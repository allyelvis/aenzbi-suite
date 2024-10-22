const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Example route
router.get('/', controller.getHome);

module.exports = router;
