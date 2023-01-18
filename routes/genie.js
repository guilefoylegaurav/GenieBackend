const express = require('express');
const { analyzeText } = require('../controllers/genieController');
const router = express.Router();

router.post('/analyze', analyzeText);

module.exports = router;