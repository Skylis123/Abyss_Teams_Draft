const express = require("express");
const router = express.Router();
const historyController = require('../../controllers/user/historyController');

router.post('/', historyController.history);

module.exports = router;

