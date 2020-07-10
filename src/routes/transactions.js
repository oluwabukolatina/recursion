const express = require('express');

const router = express.Router();
const controller = require('../controllers/transactions');

const { getTransactions } = controller;
router.get('/api/transactions', getTransactions);
module.exports = router;
