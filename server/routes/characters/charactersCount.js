const express = require("express");
const router = express.Router();
const charactersCountController = require('../../controllers/characters/charactersCountController');

router.get('/', charactersCountController.charactersCount);

module.exports = router;
