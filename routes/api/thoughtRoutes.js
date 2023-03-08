const router = require('express').Router();
const {
    allThoughts,
    oneThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(allThoughts).post(newThought);

router.route('/:thoughtId').get(oneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(newReaction).delete(deleteReaction);

module.exports = router;