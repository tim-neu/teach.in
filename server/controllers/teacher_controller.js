var teacherController = {};
const Teacher = require('../models/teacher_model');
const Class = require('../models/class_model');
const Student = require('../models/student_model');
teacherController.SIGNUP = (req, res) => {

	//seeding two classes automatically for this teacher
	var classArr = [];
	for (var i = 0; i < 2; i++) {
		var classI = Class.build({
			name: 'class ' + i,
		});
		classArr.push(classI);
	};
	var studentArr1 = [];
	for (var i = 0; i < 2; i++) {
		var studentI = Student.build({
			name: 'student' + i,
		});
		studentArr1.push(studentI);

	}

	console.log('i changed the password from 123 to:', req.body.password);
	Teacher.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	}).then((teacher) => {

		//Code below seeds two classes to the teacher;
		// for (let i = 0; i < classArr.length; i++) {
		// 	classArr[i].save().then(function () {
		// 		this.setTeacher(teacher);
		// 		// this.setStudents(studentArr1);
		// 		if (i === 0) {
		// 			for (let j = 0; j < studentArr1.length; j++) {
		// 					studentArr1[j].save().then(function () {
		// 						this.addClass(classArr[i]);
		// 						classArr[i].addStudent(this);
		// 				});
		// 			}
		// 		}
				
		// 		// if (i === 1) {
		// 		// 	for (let j =0; j < studentArr1.length; j++) {
		// 		// 			studentArr1[j].save().then(function () {
		// 		// 		});
		// 		// 	}
		// 		// }
		// 	});
		// };

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
