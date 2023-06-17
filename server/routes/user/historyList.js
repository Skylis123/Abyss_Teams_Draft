const express = require("express");
const router = express.Router();
const historyListController = require('../../controllers/user/historyListController');

router.post('/', historyListController.historyList);

module.exports = router;