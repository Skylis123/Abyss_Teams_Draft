const express = require("express");
const router = express.Router();
const userCharactersListController = require('../../controllers/characters/userCharactersListController');

router.post('/', userCharactersListController.userCharactersList);

module.exports = router;
