const teacherRouter = require('express').Router();
const teacherController = require('../../controllers/teacher_controller');
const teacherDashboardRouter = require('./dashboard_router/teacher_dashboard_router');
const teacherClassRouter = require('./classes_router/teacher_classes_router');
const authMiddleware = require('../../middlewares/auth.js');
teacherRouter.route('/')
.get(function (req, res) {
	res.send('i made it to teacher router');
});

teacherRouter.route('/signup')
.post(authMiddleware.isValidEmail, authMiddleware.hashPassword, teacherController.SIGNUP);

teacherRouter.route('/signin')
.post(authMiddleware.verifyPassword, teacherController.SIGNIN);

teacherRouter.route('/createClass')
.post(authMiddleware.checkSignIn, function (req, res) {
	res.send('create classes here');
});

teacherRouter.use('/dashboard', teacherDashboardRouter);
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send('i was redirected and im at dashboard where i should be querying data and sending it back');
// });

teacherRouter.use('/classes', teacherClassRouter);

// teacherRouter.route('/classes')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send('i should be querying the data for this teachers classes');
// });

teacherRouter.route('/inbox')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying the data for the messages');
});

teacherRouter.route('/student')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying the data for this one student');
});

module.exports = teacherRouter;
