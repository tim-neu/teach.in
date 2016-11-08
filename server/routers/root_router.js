const rootRouter = require('express').Router();
const teacherRouter = require('./teacher_router');
rootRouter.use('/teacher', teacherRouter);

module.exports = rootRouter;