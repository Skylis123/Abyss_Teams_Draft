const express = require("express");
const router = express.Router();
const removeCharacterController = require('../../controllers/characters/removeCharacterController');

router.post('/', removeCharacterController.removeCharacter);

module.exports = router;
