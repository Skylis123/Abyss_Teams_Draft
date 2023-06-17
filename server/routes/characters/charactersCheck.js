const express = require("express");
const router = express.Router();
const charactersCheckController = require('../../controllers/characters/charactersCheckController');

router.post('/', charactersCheckController.charactersCheck);

module.exports = router;
