const teacherClassRouter = require('express').Router();
const authMiddleware = require('../../../../middlewares/auth.js');
const teacherController = require('../../../../controllers/teacher_controller');
const Event = require('../../../../models/event_model.js');
const Class = require('../../../../models/class_model.js');
const ClassStudents = require('../../../../models/classStudents_model.js');
const Students = require('../../../../models/student_model.js');
teacherClassRouter.route('/')
.get(authMiddleware.checkSignIn, function (req, res) {
	Class.findOne({
		where: {
			name: req.query.className,
		},
	})
	.then(function (foundClass) {
		foundClass.getStudents().then(function (foundStudents) {
			var dataObjects = foundStudents.map(function (student) {
				return student.dataValues;
			});

			var PromiseArr = [];
			for (let i = 0; i < dataObjects.length; i++) {
				PromiseArr.push(ClassStudents.findOne({
					where: {
						classId: foundClass.id,
						studentId: dataObjects[i].id,
					},
				}));
			}

			Promise.all(PromiseArr)
			.then(function (foundPairs) {
				for (let i = 0; i < foundPairs.length; i++) {
					var foundPair = foundPairs[i];
					var dataObject = dataObjects[i];
					dataObject.classGrade = foundPair.grade;
				}

				res.send(dataObjects);
			});
		});
	});
});

teacherClassRouter.route('/student')
.post(authMiddleware.checkSignIn, function (req, res) {
	console.log(' i got the student search!!', req.body.email);
	console.log(' i got the classname!', req.body.className);
	var studentSearch = req.body.email;
	Students.findOne({
		where: {
			email: req.body.email,
		},
	})
	.then(function (foundStudent) {
		console.log('i found the students!', foundStudent);
		Class.findOne({
			where: {
				name: req.body.className,
			},
		})
		.then(function (foundClass) {
			foundClass.addStudent(foundStudent).then(function (instance) {
				res.send(foundStudent.dataValues);
			});
		});
	});

	// res.send(' i errred in posting a student to a class');
});

teacherClassRouter.route('/resources')
.get(authMiddleware.checkSignIn, function (req, res) {
	console.log(' i got the query!', req.query);
	res.send('i should be querying the database for the resources for this class');
});

teacherClassRouter.route('/classGPA')
.get(authMiddleware.checkSignIn, teacherController.getClassGpa);

// teacherClassRouter.route('/event')
// .get(authMiddleware.checkSignIn, function (req, res) {
// 	res.send(' i should be quertying the data base for events for that class');
// });

// teacherClassRouter.route('/event')
// .get(authMiddleware.checkSignIn, getAllEvents);

teacherClassRouter.route('/assignment')
.post(teacherController.addAssignment);

teacherClassRouter.route('/grade')
.post(teacherController.addGrade);


teacherClassRouter.route('/event')
.post(authMiddleware.checkSignIn, function (req, res) {
	console.log('i made it to /api/teacher/classes/class/event');
	console.log('req.body is: ', 'req.body');
	// req.body is:  { 
	//  name: 'History',
 	//  startTime: '01:00',
 	//  endTime: '01:00',
 	//  date: '2016-11-11' 
  // }

	
  

    var startTime = req.body.startTime;
 		var data = req.body.date.replace(/-0/g, ', ').replace(/-/g, ', ') + ', '+ req.body.startTime.replace(/:/gi, ', ').replace(/\b0+/g, '0');
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
 		startTime = dateStartObj;
 		console.log('dateStartObj:', dateStartObj)
 		console.log('This is the converted Date object for startTime: ----------->', dateStartObj);


 		var endTime = req.body.endTime;
 		var data = req.body.date.replace(/-0/g, ', ').replace(/-/g, ', ') + ', '+ req.body.endTime.replace(/:/gi, ', ').replace(/\b0+/g, '0');
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
 		endTime = dateEndObj;
 		console.log('dateEndObj:', dateEndObj)
 		console.log('This is the converted Date object for endTime: ----------->', dateEndObj);

 		Event.create({
 			title: req.body.name,
 			startTime: dateStartObj,
 			endTime: dateEndObj
 		}).then(function(savedEvent) {
 			console.log('SAVED TO DB!')
 		})
	res.send(' i should be quertying the data base for events for that class');
});

teacherClassRouter.route('/assignments')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send(' i should be querying the data base for assignments for that class');
});

teacherClassRouter.route('/assignments')
.post(authMiddleware.checkSignIn, function (req, res) {
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
