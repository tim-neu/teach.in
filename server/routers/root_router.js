const rootRouter = require('express').Router();
const teacherRouter = require('./teacher_router');
rootRouter.use('/teacher', teacherRouter);
rootRouter.get('/', function (req,res) {
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