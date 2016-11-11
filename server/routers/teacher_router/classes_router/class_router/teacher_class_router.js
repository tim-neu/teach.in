const teacherClassRouter = require('express').Router();
const authMiddleware = require('../../../../middlewares/auth.js');
const getClassGpa = require('../../../../controllers/teacher_controller').getClassGpa;

teacherClassRouter.route('/')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying the databse for this class');
});

teacherClassRouter.route('/resources')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be querying the database for the resources for this class');
});

teacherClassRouter.route('/classGPA')
.get(getClassGpa);

teacherClassRouter.route('/event')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send(' i should eb quertying the data base for events for that class');
});

teacherClassRouter.route('/assignments')
.get(authMiddleware.checkSignIn, function (req, res) {
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
