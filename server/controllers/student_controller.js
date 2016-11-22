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
	res.send('Authenticated');
};

studentController.SIGNOUT = (req, res) => {
	console.log(' i should be destroying req session');
	req.session.destroy(function () {
		res.send('i destroyed the user session');
	});
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