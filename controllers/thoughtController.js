const {Thought, User} = require('../models');

const allThoughts = async (req, res) => {
    try {
        const search = await Thought.find();
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const oneThought = async (req, res) => {
    try {
        const search = await Thought.findOne({ _id: req.params.thoughtId });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const newThought = async (req, res) => {
    try {
        const search = await Thought.create(req.body);
        const { _id } = search; 
        const addThought = await User.findOneAndUpdate({'username': req.body.username}, {$push: {'thoughts': _id}})
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const updateThought = async (req, res) => {
    try {
        const search = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },{ $set: req.body },{ new: true });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const deleteThought = async (req, res) => {
    try {
        const search = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const newReaction = async (req, res) => {
    try {
        const search = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {$push: {'reactions': req.body}},{new: true});
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const deleteReaction = async (req, res) => {
    try {
        const search = await Thought.findOneAndDelete({ _id: req.params.thoughtId }, {$pull: {'reactions': {reactionId: req.params.reactionId}}});
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};

module.exports = {
    allThoughts,
    oneThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
}