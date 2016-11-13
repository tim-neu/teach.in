const rootRouter = require('express').Router();
const teacherRouter = require('./teacher_router/teacher_router');
const studentRouter = require('./student_router/student_router');
rootRouter.use('/teacher', teacherRouter);
rootRouter.use('/student', studentRouter);
rootRouter.get('/', function (req, res) {
	console.log(req.cookies);
	console.log('==========');
	console.log(req.session);
	if (req.session.pageViews) {
		req.session.pageViews++;
		res.send('You visited this page' + req.session.pageViews + ' times');
	} else {
		req.session.pageViews = 1;
		res.send('You visited this page for teh first times');
	}
});

module.exports = rootRouter;