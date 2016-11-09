var teacherController = {};
const Teacher = require('../models/teacher_model');
teacherController.SIGNUP = (req, res) => {

	console.log('i changed the password from 123 to:', req.body.password);
	Teacher.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	}).then((teacher) => {
		console.log(teacher,"teacher")
		return teacher;
	})
	.catch((err) => {
		console.log('err in creating teacher signup:', err);
	});
	res.send(req.body);
};

teacherController.SIGNIN = (req, res) => {
	console.log('im trying to redirect to dashboard');

	//res.send('i should be redirecting to teacher/dashboard');
	//2 ways: redirect directly to public folder, or pretend its like
	// a get request to the /api/teachers/dashboard endpoint and give the 
	// data to the client to render
	res.redirect('/api/teacher/dashboard');
};

module.exports = teacherController;
