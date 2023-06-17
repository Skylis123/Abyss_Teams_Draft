const express = require("express");
const router = express.Router();
const registerController = require('../../controllers/user/registerController');

router.post('/', registerController.register);

module.exports = router;