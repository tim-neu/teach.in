const teacherClassRouter = require('express').Router();
const authMiddleware = require('../../../../middlewares/auth.js');
const teacherController = require('../../../../controllers/teacher_controller');
const Event = require('../../../../models/event_model.js');
const getAllEvents = require('../../../../controllers/teacher_controller').getAllEvents;
const Class = require('../../../../models/class_model.js');
const ClassStudents = require('../../../../models/classStudents_model.js');
const Students = require('../../../../models/student_model.js');
const AssignmentStudents = require('../../../../models/assignmentStudents_model.js');
const Assignment = require('../../../../models/assignment_model.js');
teacherClassRouter.route('/')
.get(authMiddleware.checkSignIn, function (req, res) {
	Class.findOne({
		where: {
			name: req.query.className,
		},
	})
	.then(function (foundClass) {
		if (foundClass) {
			foundClass.getStudents().then(function(foundStudents){
				var dataObjects = foundStudents.map(function(student){
					return student.dataValues;
				});
				var PromiseArr = [];
				for (let i = 0; i < dataObjects.length; i++) {
					PromiseArr.push(ClassStudents.findOne({
						where: {
							classId: foundClass.id,
							studentId: dataObjects[i].id,
						},
					}))
				}
				Promise.all(PromiseArr)
				.then(function(foundPairs){
					for (let i = 0; i < foundPairs.length; i++) {
						var foundPair = foundPairs[i];
						var dataObject = dataObjects[i];
						dataObject.classGrade = foundPair.grade;
					}
					res.send(dataObjects);
				})
			});
		}
		else {
			res.send('cant found class');
		}
	});
});

teacherClassRouter.route('/student')
.post(authMiddleware.checkSignIn, function (req, res) {
	var studentSearch = req.body.email;
	Students.findOne({
		where: {
			email: req.body.email,
		},
	})
	.then(function (foundStudent) {
		Class.findOne({
			where: {
				name: req.body.className,
			},
		})
		.then(function (foundClass) {
			foundStudent.addClass(foundClass).then(function (instance) {

				//add the student to assignments table
				Assignment.findAll({
					where: {
						classId: foundClass.id,
					},
				})
				.then(function (foundAssignments) {
					for (let i = 0; i < foundAssignments.length; i++) {
						let foundAssignment = foundAssignments[i];
						foundAssignment.addStudent(foundStudent, {
							grade: 0,
						});
					}
				});

				foundClass.getStudents().then(function (foundStudents) {
					var data = foundStudents.map(function(student){
						return student.dataValues;
					});

					for (var i = 0; i < data.length; i++) {
						var studnt = data[i];
						if (studnt.email === foundStudent.email) {
							res.send(studnt);
						}
					}
				});
			});
		});
	});
});

teacherClassRouter.route('/resources')
.get(teacherController.getClassResources);

teacherClassRouter.route('/classGPA')
.get(teacherController.getClassGpa);


teacherClassRouter.route('/assignment')
.post(teacherController.addAssignment);

teacherClassRouter.route('/assignment')
.get(teacherController.getAssignments);

teacherClassRouter.route('/assignment/student')
.post(function(req,res){
	res.send('the post is /api/teacher/classes/class/assignment/student');
});

teacherClassRouter.route('/assignment/student')
.put(teacherController.UPDATEASSIGNMENTGRADE);

teacherClassRouter.route('/assignment/students')
.get(function(req,res){
	console.log('req.query is:', req.query);
	Assignment.findOne({
		where: {
			name: req.query.assignmentName
		}
	})
	.then(function(assignment){
		var assignmentID = assignment.dataValues.id;
		return AssignmentStudents.findAll({
			where: {
				assignmentId: assignmentID
			}
		})
	})
	.then(function(assignmentStudentPairs){
		// console.log('the pairs have only the ids?',assignmentStudentPairs);
		var dataObjects = assignmentStudentPairs.map(function(pair){
			return pair.dataValues;
		});
		var PromiseArr = [];
		for (let i = 0; i < dataObjects.length; i++) {
			PromiseArr.push(Students.findOne({
				where: {
					id: dataObjects[i].studentId,
				}
			}));
		}
		Promise.all(PromiseArr)
		.then(function(foundStudents){
			for (let i = 0; i < foundStudents.length; i++) {
				var foundStudent = foundStudents[i];
				var dataObject = dataObjects[i];
				dataObject.name = foundStudent.name;
			}
			res.send(dataObjects);
		})

	})
	//res.send('i made it to assignment/students');
});

teacherClassRouter.route('/grade')
.post(teacherController.addGrade);

// teacherClassRouter.route('/event')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send(' i should be quertying the data base for events for that class');
// });

teacherClassRouter.route('/event')
.get(authMiddleware.checkSignIn, getAllEvents);

teacherClassRouter.route('/event')
.post(authMiddleware.checkSignIn, function (req, res) {
	console.log('i made it to /api/teacher/classes/class/event');
	console.log('req.body is: ---------------> ', 'req.body');
	// req.body is:  { 
	//  name: 'History',
 	//  start: '01:00',
 	//  end: '01:00',
 	//  date: '2016-11-11' 
  // }

	console.log(req.body,  " this is req. body ----------------------------------->")
  


    var start = req.body.start;
 		var data = req.body.date.replace(/-0/g, ', ').replace(/-/g, ', ') + ', '+ req.body.start.replace(/:/gi, ', ').replace(/\b0+/g, '0');
 		var arrStart = data.split(',');
 		console.log('array is ------------>', arrStart);
		var mapped = arrStart.map(function(string){
		  if (string == " 0") {
		    return string[1]
		    
		  }
		  else if (string[1] === '0' && string[0] === " ") {
		    return string.slice(2);
		  }
		  else{
		    return string;
		  }
		});
    	console.log('mapped is: ', mapped);
 		var dateStartObj = new Date(Number(mapped[0]), Number(mapped[1]) -1, Number(mapped[2]), Number(mapped[3]), Number(mapped[4]));
 		start = dateStartObj;
 		console.log('dateStartObj:', dateStartObj)
 		console.log('This is the converted Date object for start: ----------->', dateStartObj);


 		var end = req.body.end;
 		var data = req.body.date.replace(/-0/g, ', ').replace(/-/g, ', ') + ', '+ req.body.end.replace(/:/gi, ', ').replace(/\b0+/g, '0');
 		var arr = data.split(',');
 		console.log('array is ------------>', arr);
		var mapped = arr.map(function(string){
		  if (string == " 0") {
		    return string[1]
		    
		  }
		  else if (string[1] === '0' && string[0] === " ") {
		    return string.slice(2);
		  }
		  else{
		    return string;
		  }
		});
    	console.log('mapped is: ', mapped);
 		var dateEndObj = new Date(Number(mapped[0]), Number(mapped[1]) -1, Number(mapped[2]), Number(mapped[3]), Number(mapped[4]));
 		end = dateEndObj;
 		console.log('This is the converted Date object for end: ----------->', dateEndObj);

 		Event.create({
 			title: req.body.name,
 			start: dateStartObj,
 			end: end
 		}).then(function(savedEvent) {
 			console.log('SAVED TO DB!')
 		}).catch(function(error){
 			console.log('ERROR:', error)
 		});

 		Class.create({
 			name: req.body.name,
 			start: req.body.start,
 			end: req.body.end,
 			enrolledNumber: 0,
 			teacherId: 1,
 			date: req.body.date
 		}).then(function(savedEvent) {
 			console.log('savedClass')
 		})
 		.catch(function(error){
 			console.log(error,"error saving class")
 		});
});



teacherClassRouter.route('/assignments')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send(' i should be querying the data base for assignments for that class');
});

teacherClassRouter.route('/assignments')
.post(authMiddleware.checkSignIn, function (req, res) {
	console.log('req.body for /assignments: ------------>',req.body);

	Event.create({
 		name: req.body.assignment,
		classId: req.body.classId,
		type: req.body.type,
		dueDate: req.body.date,
		grade: req.body.grade
 	}).then(function() {
 		console.log('Saved assignment to db!')
 	})

	res.send(' i should be querying the data base for assignments for that class');
});

teacherClassRouter.route('/students/student/gpa')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying the data for students in this class using the join table');
});

teacherClassRouter.route('/groups')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying data for the groups witin this class using the join talbe');
});

teacherClassRouter.route('/groups/group/')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send(' i should be querying the database for the students related to this group');
});

teacherClassRouter.route('/groups/group/messages')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send(' i should be querying the database for the messages related to this group');
});

module.exports = teacherClassRouter;
