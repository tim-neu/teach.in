var studentController = {};
const Student = require('../models/student_model');
studentController.SIGNUP = (req, res) => {
	Student.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	}).then(function (savedStudent) {
		console.log('i saved the student!', savedStudent.dataValues);
		res.send(savedStudent.dataValues);
	});
};

module.exports = studentController;