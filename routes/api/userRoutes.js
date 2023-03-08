const router = require('express').Router();
const  {
    allUsers,
    oneUser,
    newUser,
    updateUser,
    deleteUser,
    newFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(allUsers).post(newUser);

router.route('/:userId').get(oneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(newFriend).delete(deleteFriend);

module.exports = router;