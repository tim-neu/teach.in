const studentRouter = require('express').Router();
const authMiddleware = require('../../middlewares/studentAuth.js');
const studentController = require('../../controllers/student_controller');
studentRouter.route('/signup')
.post(authMiddleware.isValidEmail, authMiddleware.hashPassword, studentController.SIGNUP);

module.exports = studentRouter;
