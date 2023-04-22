const express = require("express");
const router = express.Router();
const charactersNameController = require('../../controllers/characters/charactersNameController');

router.post('/', charactersNameController.charactersName);

module.exports = router;