const Sequelize = require('sequelize');
const dotenv = require('dotenv').load();
const sequelize = new Sequelize(process.env.DB_URL);
// const sequelize = new Sequelize('postgres://hmfhocyp:fD7IzCJTB-7g5AMH6e0FKWzXqBmMmnVL@elmer.db.elephantsql.com:5432/hmfhocyp');
// const sequelize = new Sequelize('postgres://nhhfsvxl:PmfmyAew57jYcGCbVPbLg2A2n13rEyXD@elmer.db.elephantsql.com:5432/nhhfsvxl');

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

const Teacher = require('./models/teacher_model');
const Class = require('./models/class_model');
const Resource = require('./models/resource_model');
const Student = require('./models/student_model');
const ClassGPA = require('./models/classGPA_model');
const Assignment = require('./models/assignment_model');
const Group = require('./models/group_model');
const GroupMessages = require('./models/groupMessages_model');
const Event = require('./models/event_model');
const AssignmentStudents = require('./models/assignmentStudents_model.js');
const ClassStudents = require('./models/classStudents_model.js');
// Teacher.hasOne(Class);
Class.belongsTo(Teacher);
Resource.belongsTo(Class);
Class.belongsToMany(Student, { through: ClassStudents });
Student.belongsToMany(Class, { through: ClassStudents });
ClassGPA.belongsTo(Class);
Assignment.belongsToMany(Student, { through: AssignmentStudents });
Student.belongsToMany(Assignment, { through: AssignmentStudents });
Assignment.belongsTo(Class);
Group.belongsTo(Class);
Group.belongsTo(Assignment);
Group.belongsToMany(Student, { through: 'groupStudents' });
GroupMessages.belongsTo(Group);
GroupMessages.hasMany(GroupMessages, { as: 'nestedMessages'});
Event.belongsTo(Class);
sequelize.sync().then(function () {});

