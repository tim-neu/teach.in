var studentController = {};
const Student = require('../models/student_model');
const Event = require('../models/event_model');
const _ = require('lodash');

studentController.SIGNUP = (req, res) => {
	Student.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		picture_url: 'https://s3.amazonaws.com/teach.in123454321/blank-profile-picture-973460_960_720.png'
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

studentController.getAllEvents = (req, res) => {
	Event.findAll({})
	.then(function(events){
		console.log('studentController: here are the STUDENT event dataValues ----------------> ', events);
		var mappedDataValues = events.map(function(event){
			return event.dataValues;
		});
		mappedDataValues.forEach(function(object,index,collection){
			object = _.pick(object,['title','start','end'])
			collection[index] = object;
		});
		console.log('studentController: mapped data values should contain objects that have only name, start and end time', mappedDataValues);
		res.send(mappedDataValues);
	});
};

studentController.GETSTUDENT = (req, res) => {
	console.log("inside get student student controller")
	Student.findOne({where: {email: req.query.studentEmail}})
	.then(function(foundStudent){
		console.log(foundStudent, "foundstudent")
		res.send(foundStudent);
	}).catch(function(err){
		console.log(err)
	})
};


module.exports = studentController;