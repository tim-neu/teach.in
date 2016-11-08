const teacherRouter = require('express').Router();
const teacherController = require('../controllers/teacher_controller');
const authMiddleware = require('../middlewares/auth.js')
teacherRouter.route('/')
.get(function (req, res) {
	res.send('i made it to teacher router');
});

teacherRouter.route('/signup')
.post(authMiddleware.isValidEmail, authMiddleware.hashPassword, teacherController.SIGNUP);

module.exports = teacherRouter;
