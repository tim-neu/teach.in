var studentController = {};
const Student = require('../models/student_model');
const _ = require('lodash');

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

studentController.SIGNIN = (req, res) => {
	//res.send('i should be redirecting to teacher/dashboard');
	//2 ways: redirect directly to public folder, or pretend its like
	// a get request to the /api/teachers/dashboard endpoint and give the 
	// data to the client to render
	// res.redirect('/home');
	res.send('i shoudl be redirecting to studentDashboard');
};

studentController.GETSTUDENTS = (req, res) => {
	console.log('i got the students query:', req.query.student);
	var query = req.query.student + '%';
	Student.findAll({
		where: {
			name: {
				$like: query,
			},
		},
	})
	.then(function (foundStudents) {
		var map = foundStudents.map(function (student) {
			return student.dataValues;
		});

		map.forEach(function (obj, index, collection) {
			obj = _.pick(obj, ['name', 'email']);
			collection[index] = obj;
		});

		map.forEach(function (obj, index, collection) {
			obj = _.mapValues(obj, function (value, key, object) {
				if (key === 'name') {
					return `${value}              ${object.email}`;
				} else {
					return value;
				}
			});

			collection[index] = obj;
		});

		map.forEach(function (obj, index, collection) {
			obj = _.mapKeys(obj, function (value, key) {
				if (key === 'name') {
					return 'label';
				} else {
					return 'value';
				}
			});

			collection[index] = obj;
		});

		res.send(map);
	});
};

module.exports = studentController;