var teacherController = {};
const Teacher = require('../models/teacher_model');
const Class = require('../models/class_model');
const Student = require('../models/student_model');
const Assignment = require('../models/assignment_model');
const assignmentStudents = require('../models/assignmentStudents_model');
const ClassStudents = require('../models/classStudents_model');
const Event = require('../models/event_model');
const Resource = require('../models/resource_model');
const _ = require('lodash');
teacherController.SIGNUP = (req, res) => {

	//seeding two classes automatically for this teacher
	var classArr = [];
	for (let i = 0; i < 2; i++) {
		let classI = Class.build({
			name: 'class ' + i,
		});
		classArr.push(classI);
	};

	var studentArr1 = [];
	for (let i = 0; i < 10; i++) {
		let studentI = Student.build({
			name: 'student' + i,
			gpa: 4 - (Math.random() * 3).toFixed(2),
			email: 'email' + i,
		});
		studentArr1.push(studentI.save());
	}

	var studentArr2 = [];
	for (let i = 10; i < 20; i++) {
		let studentI = Student.build({
			name: 'student' + i,
			email: 'email' + i,
			gpa: 4 - (Math.random()*3).toFixed(2)
		});
		studentArr2.push(studentI.save());
	}

	var assignmentArr1 = [];
	for (let i = 0; i < 4; i++) {
		let assignmentI = Assignment.build({
			name: 'Assignment' + i,
			maxPoints: 100,
		});
		assignmentArr1.push(assignmentI.save());
	}

	var student1Assignment1 = studentArr1.concat(assignmentArr1);
	var assignmentArr2 = [];
	for (let i = 4; i < 8; i++) {
		let assignmentI = Assignment.build({
			name: 'Assignment' + i,
			maxPoints: 100,
		});
		assignmentArr2.push(assignmentI.save());
	}
	var student2Assignment2 = studentArr2.concat(assignmentArr2);

	console.log('i changed the password from 123 to:', req.body.password);
	Teacher.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		picture: 'https://s3.amazonaws.com/teach.in123454321/blank-profile-picture-973460_960_720.png'
	}).then((teacher) => {
		//console.log(teacher,"teacher")

		//Code below seeds two classes to the teacher;
		for (let i = 0; i < classArr.length; i++) {
			classArr[i].save().then(function (savedClass) {
				savedClass.setTeacher(teacher);
				if (i === 0) {
					Promise.all(student1Assignment1)
						.then(function (results) {
							//console.log('the results should be a list of students and the length should be 14', results, results.length);

							for (let j = 0; j < 10; j++) {
								var studentJ = results[j];
								var grades = ['A','B','C','D'];
								var index = Math.floor(Math.random()*3);
								var randomGrade = grades[index];
								savedClass.addStudent(studentJ, {
									grade: randomGrade
								});
							}

							for (let k = 10; k < results.length; k++) {
								var assignmentK = results[k];
								assignmentK.setClass(savedClass);
								for (let m = 0; m < 10; m++) {
									var studentM = results[m];
									assignmentK.addStudent(studentM, {
										grade: 100 - Math.floor((Math.random() * 30)),
									});
								};
							}

						});
				};
				
				let students2 = {};
				if (i === 1) {
					Promise.all(student2Assignment2)
						.then(function (results) {
							//console.log('the results should be a list of students and the length should be 14', results, results.length);

							for (let j = 0; j < 10; j++) {
								var studentJ = results[j];
								var grades = ['A','B','C','D'];
								var index = Math.floor(Math.random()*3);
								var randomGrade = grades[index];
								savedClass.addStudent(studentJ, {
									grade: randomGrade
								});
							}
							for (let k = 10; k < results.length; k++) {
								var assignmentK = results[k];
								assignmentK.setClass(savedClass);
								for (let m = 0; m < 10; m++) {
									let studentM = results[m];
									
									let assignments = [];
									assignmentK.addStudent(studentM, {
										grade: 100 - Math.floor((Math.random() * 30)),
									}).then(function(){
					
									});

								};
							}
						});
				};
			});
		};
        return teacher;
	})
	.catch((err) => {
		console.log('err in creating teacher signup:', err);
	});

	res.send(req.body);
};

teacherController.SIGNIN = (req, res) => {
	console.log('im trying to redirect to dashboard');
	res.send('Authenticated');
};

teacherController.getClassPoints = (req, res) => {
	let totalGrades = [];
	let assignmentCount = 0;
	Assignment.findAll({
		where: { classId: req.query.classId },
		include: { model: Student },
	})
	.then(function (assignments) {
		let classAverage = 0;
		let maxPoints = 0;
		let numAssignments = assignments.length;
			assignments.forEach(function (assignment) {
			  var assignmentTotal = 0;
			  var count = 0;
			  maxPoints += assignment.maxPoints; 
			  assignment.students.forEach(function (student) {
			    assignmentTotal += student.assignmentStudents.grade;
			    count++;
			 	} );
			  classAverage += (assignmentTotal / count);
			} );
			res.send([classAverage.toString(), maxPoints.toString()]);
		});
	};

teacherController.SIGNOUT = (req, res) => {
	console.log(' i should be destroying req session');
	req.session.destroy(function () {
		res.send('i destroyed the user session');
	});
};


teacherController.getStudentGpa = (req, res) => {
	// Class.findAll().then(function(foundClasses){
	// 	foundClasses.forEach(function(Class){
	// 		Class.getStudents().then(function(foundAssociatedStudents){
	// 			foundAssociatedStudents.forEach(function(associatedStudent){
	// 				associatedStudent.update({

	// 				})
	// 			})
	// 		})
	// 	})
	// })


};
teacherController.GETCLASSES = function(req,res) {
	console.log(req.query.teacherEmail, "<----------------- teacher EMAIL")
	Teacher.findOne({where: {email: req.query.teacherEmail}})
	.then(function(teacher){
		var teacherID = teacher.id;
		Class.findAll({where: {teacherId: teacherID}})
		.then(function(allClasses){
			console.log(allClasses)
			res.send(allClasses);
		})
		.catch(function(err){
			console.log(err);
	})
	});
};
teacherController.getProfileInformation = (req, res) => {

};

teacherController.UPDATEASSIGNMENTGRADE = (req, res) => {
	assignmentStudents.findOne({
		where: {
			studentId: req.body.studentId,
			assignmentId: req.body.assignmentId,
		}
	}).then(function(foundInstance){
		foundInstance.update({
			grade: req.body.grade,
		})
	});
	res.send('i made it to class/assignment/student');
};

teacherController.addAssignment = (req, res) => {
	var className = req.body.className;
	console.log(req.body.className, "-------- this is req.body.className")
	Class.findOne({where: {name: req.body.className}})
	.then(function(course){
		console.log(course, "--------- this is course")
		var classId = course.id
		var newAssignment = Assignment.build({
			name: req.body.name,
			classId: classId,
			type: req.body.type,
			dueDate: req.body.date,
			maxPoints: req.body.maxPoints
		});
		newAssignment.save().then(function(response){
			course.getStudents().then(function(foundPairs){
				//console.log('i found the students in this class in addassignment', foundPairs);
				for (let i = 0; i < foundPairs.length; i++) {
					let foundStudent = foundPairs[i];
					response.addStudent(foundStudent, {
						grade: 0
					});
				}
				res.send(response)
			});
	})
	}).catch(function(error){
		res.send(error)
	})
};

teacherController.addGrade = (req, res) => {
	var studentId;
	var assignmentId;
	Student.findOne({where: {name: req.body.student}})
	.then(function(student){
		studentId = student.id
	})
	.then(function(){
	Assignment.findOne({where: {name: req.body.assignment}})
	.then(function(assignment){
		assignmentId = assignment.id
		var newGrade = assignmentStudents.build({
			assignmentId: assignmentId,
			studentId: studentId,
			grade: req.body.grade
		});
		newGrade.save()
		})
		.then(function(success){
			res.send(success);
		})
		.catch(function(error){
			res.send(error)
		});
	})
};

teacherController.getAssignments = (req,res) => {
	// Class.findOne({where: {name: req.query.classId}})
	// .then(function(foundClass){
	// 	classId = foundClass.id
		console.log(req.query.classId, "req.query")
		Assignment.findAll({where: {classId: req.query.classId}})
		.then(function(response){
			console.log("Assignments here!", response)
			res.send(response)
		});
	// });
}

teacherController.getAllEvents = (req, res) => {
	Event.findAll({})
	.then(function(events){
		console.log('here are the event dataValues ----------------> ', events);
		var mappedDataValues = events.map(function(event){
			return event.dataValues;
		});
		mappedDataValues.forEach(function(object,index,collection){
			object = _.pick(object,['title','start','end'])
			collection[index] = object;
		});
		console.log('mapped data values should contain objects taht have only name,start and end time', mappedDataValues);
		res.send(mappedDataValues);
	});
};

teacherController.getClassResources = (req, res) => {
	Resource.findAll({where: {classId: req.query.classId}})
	.then(function(resources){
		console.log('here are the class dataValues ----------------> ');
		res.send(resources);
	}).catch(function(err){
		console.log(err)
	})
};

teacherController.getTeacher = (req, res) => {
	Teacher.findOne({where: {email: req.query.teacherEmail}})
	.then(function(foundTeacher){
		res.send(foundTeacher);
	}).catch(function(err){
		console.log(err)
	})
};


module.exports = teacherController;
