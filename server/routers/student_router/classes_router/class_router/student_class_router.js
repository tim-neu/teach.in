const studentClassRouter = require('express').Router();
const authMiddleware = require('../../../../middlewares/auth.js');
const studentController = require('../../../../controllers/student_controller');
const Event = require('../../../../models/event_model.js');
const getAllEvents = require('../../../../controllers/student_controller').getAllEvents;
const Class = require('../../../../models/class_model.js');
const ClassStudents = require('../../../../models/classStudents_model.js');
const Students = require('../../../../models/student_model.js');
const AssignmentStudents = require('../../../../models/assignmentStudents_model.js');
const Assignment = require('../../../../models/assignment_model.js');

studentClassRouter.route('/event')
.get(authMiddleware.checkSignIn, getAllEvents);

module.exports = studentClassRouter;
