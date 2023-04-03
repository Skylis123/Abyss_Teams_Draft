const express = require("express");
const router = express.Router();
const addCharacterController = require('../../controllers/characters/addCharacterController');

router.post('/', addCharacterController.addCharacter);

module.exports = router;