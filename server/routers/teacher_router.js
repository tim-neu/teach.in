const teacherRouter = require('express').Router();
//const teacherController = require('../controllers/teacher_controller');
teacherRouter.route('/')
.get(function(req,res) {
	res.send('i made it to teacher router');
})

teacherRouter.route('/signup')
.post(function(req,res){
	res.send('i made it to post: /api/teacher/signup')
})
module.exports = teacherRouter;