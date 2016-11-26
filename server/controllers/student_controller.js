var studentController = {};
const Student = require('../models/student_model');
const Event = require('../models/event_model');
const Class = require('../models/class_model');
const Assignment = require('../models/assignment_model');
const AssignmentStudents = require('../models/assignmentStudents_model');
const ClassStudents = require('../models/classStudents_model');
const Resource = require('../models/resource_model');
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

studentController.GETCLASSGRADE = (req, res) => {
	console.log('should have student email and class ID');
	console.log('req query in studentgetcalssgrade is:', req.query);

	//should be querying classes for all class a student is taking
	// should be querying all assignments with that class ID
		//should be querying assignmetn students for all the
		// assignment students pair with that assignment id and student ID;
	}
studentController.studentResources = (req, res) => {
	let totalGrades = [];
	let assignmentCount = 0;
	console.log(req.query.studentEmail)
	Student.findOne({
		where: { email: req.query.studentEmail },
	}).
	then(function(student){
		console.log(student, "student in then")
		const studentId = student.id;
		ClassStudents.findAll({
			where: {studentId: studentId},
		})
		.then(function(classes){
			let classPromiseArray = [];
			classes.forEach(function(newClass){
				classPromiseArray.push(Resource.findAll({
					where: {classId: newClass.classId}
				}));
				classPromiseArray.push(Class.findAll({
					where: {id: newClass.classId}
				}));
			});
			Promise.all(classPromiseArray)
			.then(function(resources){
				res.send(resources);
			});
		});
	});

	}

studentController.GETCLASSES = function(req,res) {
	console.log(req.query.studentEmail, "<----------------- student EMAIL")
	Student.findOne({where: {email: req.query.studentEmail}})
	.then(function(student){
		var studentID = student.id;
		student.getClasses()
		.then(function(studentClasses){
			console.log('all the student classes are:', studentClasses);
			res.send(studentClasses);
		})
		.catch(function(err){
			console.log('err in getting student classes');
		})
	});
};
module.exports = studentController;