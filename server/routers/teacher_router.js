const teacherRouter = require('express').Router();
const teacherController = require('../controllers/teacher_controller');
const authMiddleware = require('../middlewares/auth.js');
teacherRouter.route('/')
.get(function (req, res) {
	res.send('i made it to teacher router');
});

teacherRouter.route('/signup')
.post(authMiddleware.isValidEmail, authMiddleware.hashPassword, teacherController.SIGNUP);

teacherRouter.route('/signin')
.post(authMiddleware.verifyPassword, teacherController.SIGNIN);

teacherRouter.route('/dashboard')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i was redirected and im at dashboard where i should be getting data and sending it back');
});

module.exports = teacherRouter;
