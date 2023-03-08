const { User } = require('../models');

const allUsers = async (req, res) => {
    try {
        const search = await User.find();
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const oneUser = async (req, res) => {
    try {
        const search = await User.findOne({ _id: req.params.userId });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const newUser = async (req, res) => {
    try {
        const search = await User.create(req.body);
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const updateUser = async (req, res) => {
    try {
        const search = await User.findOneAndUpdate({ _id: req.params.userId },{ $set: req.body },{ new: true });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const deleteUser = async (req, res) => {
    try {
        const search = await User.findOneAndDelete({ _id: req.params.userId });
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const newFriend = async (req, res) => {
    try {
        const search = await User.findOneAndUpdate({ _id: req.params.userId }, {$push: {'friends': req.params.friendId}});
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};
const deleteFriend = async (req, res) => {
    try {
        const search = await User.findOneAndDelete({ _id: req.params.userId }, {$pull: {'friends': req.params.friendId}});
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({message: error});
    }
};


module.exports = {
    allUsers,
    oneUser,
    newUser,
    updateUser,
    deleteUser,
    newFriend,
    deleteFriend
}