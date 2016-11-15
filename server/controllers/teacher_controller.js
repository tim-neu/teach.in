var teacherController = {};
const Teacher = require('../models/teacher_model');
const Class = require('../models/class_model');
const Student = require('../models/student_model');
const Assignment = require('../models/assignment_model');
const assignmentStudents = require('../models/assignmentStudents_model');
const ClassStudents = require('../models/classStudents_model');
const Event = require('../models/event_model');
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
		});
		assignmentArr1.push(assignmentI.save());
	}

	var student1Assignment1 = studentArr1.concat(assignmentArr1);
	var assignmentArr2 = [];
	for (let i = 4; i < 8; i++) {
		let assignmentI = Assignment.build({
			name: 'Assignment' + i,
		});
		assignmentArr2.push(assignmentI.save());
	}
	var student2Assignment2 = studentArr2.concat(assignmentArr2);

	console.log('i changed the password from 123 to:', req.body.password);
	Teacher.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
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
				// //savedClass.setStudents(studentArr1);
				// if (i === 0) {
				// 	// for (let k = 0; k < assignmentArr1.length; k++) {
				// 	// 	assignmentArr1[k].save().then(function (savedAssignment) {
				// 	// 		savedAssignment.addStudent(savedStudent, {
				// 	// 			grade: 100 - Math.floor((Math.random() * 30)),
				// 	// 		});
				// 	// 	});
				// 	// }
				// 	for (let j = 0; j < studentArr1.length; j++) {
				// 			studentArr1[j].save().then(function (savedStudent) {
				// 				classArr[i].addStudent(savedStudent);
				// 				// for (let k = 0; k < assignmentArr1.length; k++) {
				// 				// 	assignmentArr1[k].save().then(function (savedAssignment) {
				// 				// 		savedAssignment.addStudent(savedStudent, {
				// 				// 			grade: 100 - Math.floor((Math.random() * 30)),
				// 				// 		});
				// 				// 	});
				// 				// }
				// 		});
				// 	}
				// };

				// if (i === 1) {
				// 	for (let j = 0; j < studentArr2.length; j++) {
				// 			studentArr2[j].save().then(function (savedStudent) {
				// 				classArr[i].addStudent(savedStudent);
				// 		});
				// 	}
				// }
			});
		};
		// console.log("before for")
		// for(var key in students2){
		// 	cosole.log(key)
		// }
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

teacherController.getClassGpa = (req, res) => {
	Student.findAll({})
	.then(function(students){
		let studentsGPA = students.reduce(function(total, item){
			return total + item.dataValues.gpa
		}, 0) / 20;
		console.log(studentsGPA)
		res.send(studentsGPA.toFixed(2).toString());
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
	Class.findAll()
	.then(function(bothClasses){
		res.send(bothClasses);
	})
	.catch(function(err){
		console.log(err);
	})
};
teacherController.getProfileInformation = (req, res) => {

};

teacherController.addAssignment = (req, res) => {
	var className = req.body.class
	console.log(req.body.className, "-------- this is req.body.className")
	Class.findOne({where: {name: req.body.className}})
	.then(function(course){
		console.log(course, "--------- this is course")
		var classId = course.id
		var newAssignment = Assignment.build({
			name: req.body.assignment,
			classId: classId,
			type: req.body.type,
			dueDate: req.body.date
		});
		newAssignment.save();
	}).catch(function(error){
		console.log(error, "this is the error");
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
			console.log(success);
		})
		.catch(function(error){
			console.log(error)
		});
	})
};



module.exports = teacherController;
