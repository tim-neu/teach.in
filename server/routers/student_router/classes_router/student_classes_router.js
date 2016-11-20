const studentClassesRouter = require('express').Router();
const studentClassRouter = require('./class_router/student_class_router');
const authMiddleware = require('../../../middlewares/auth.js');
const studentController = require('../../../controllers/student_controller');

// studentClassesRouter.route('/')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	console.log('why am i not sending it to him');
// 	res.send('i should be querying the data for this students classes');
// });

// studentClassesRouter.route('/')
// .get(authMiddleware.checkSignIn, studentController.GETCLASSES);

studentClassesRouter.route('/createClass')
.post(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be creating a class in the database');
});

studentClassesRouter.use('/class', studentClassRouter);
// studentClassesRouter.route('/resourses')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send('i should be querying the data for the resource for this class');
// });

module.exports = studentClassesRouter;