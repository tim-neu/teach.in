const teacherClassesRouter = require('express').Router();
const teacherClassRouter = require('./class_router/teacher_class_router');
const authMiddleware = require('../../../middlewares/auth.js');
const teacherController = require('../../../controllers/teacher_controller');

// teacherClassesRouter.route('/')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	console.log('why am i not sending it to him');
// 	res.send('i should be querying the data for this teachers classes');
// });

teacherClassesRouter.route('/')
.get(authMiddleware.checkSignIn, teacherController.GETCLASSES);

teacherClassesRouter.route('/createClass')
.post(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be creating a class in the database');
});

teacherClassesRouter.use('/class', teacherClassRouter);
// teacherClassesRouter.route('/resourses')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send('i should be querying the data for the resource for this class');
// });

module.exports = teacherClassesRouter;
