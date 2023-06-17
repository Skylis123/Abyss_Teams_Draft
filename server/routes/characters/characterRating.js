const express = require('express');
const router = express.Router();
const characterRatingController = require('../../controllers/characters/characterRatingController');

router.post('/', characterRatingController.characterRating);

module.exports = router;
