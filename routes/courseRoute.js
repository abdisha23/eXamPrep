const express = require('express');
const {
    createCourse, 
    getallCourses,
    getCourse,
    deleteCourse,
    } = require('../controllers/courseCtrl');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/create',  authMiddleware, isAdmin, createCourse);
router.get('/all', getallCourses);
router.get('/:courseId', getCourse);
router.delete('/delete/:courseId', authMiddleware, isAdmin, deleteCourse);



module.exports = router