const express = require('express');
const {
    createUser, 
    deleteUser,
    loginUser,
    updateUser,
    blockUser,
    unblockUser,
    loginAdmin,
    logoutAdmin,
    logoutUser,
    getUserById,
    getallUsers,
    forgotPassword,
    resetPassword
    } = require('../controllers/userCtrl');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router()
router.post('/create', createUser);
router.delete('/delete/:UserId', deleteUser);
router.delete('/login', loginUser);
router.delete('/update', updateUser);
router.put('/block/:userId', blockUser);
router.put('/unblock/:userId', unblockUser);
router.get('/logout-user', logoutUser);
router.get('/logout-admin', logoutAdmin);
router.get('/get/:userId', getUserById);
router.get('/all', getallUsers);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router