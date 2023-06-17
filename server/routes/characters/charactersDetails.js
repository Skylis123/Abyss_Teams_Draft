const express = require("express");
const router = express.Router();
const charactersDetailsController = require('../../controllers/characters/characterDetailsController');

router.post('/', charactersDetailsController.charactersDetail);

module.exports = router;