const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://tuwsxvul:0OSNKxucNX7vVVKD1_NXsFoWqC5nL3SN@elmer.db.elephantsql.com:5432/tuwsxvul');

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
// Teacher.hasOne(Class);
Class.belongsTo(Teacher);
Resource.belongsTo(Class);
Class.belongsToMany(Student, { through: 'ClassStudent' });
ClassGPA.belongsTo(Class);
Assignment.belongsTo(Student);
Assignment.belongsTo(Class);
Group.belongsTo(Class);
Group.belongsTo(Assignment);
Group.belongsToMany(Student, { through: 'groupStudent' });
GroupMessages.belongsTo(Group);
GroupMessages.hasMany(GroupMessages, { as: 'nestedMessages'});

// Teacher.create({
// 	name: 'teacher1',
// 	email: 'teacher1@gmail.com',
// 	password: 'teacher1pw'
// })
//Class.hasOne(resource);
sequelize.sync({ force: true }).then(function () {
	var teacher1 = Teacher.build({
		name: 'teacher1',
		email: 'teacher1@gmail.com',
		password: 'teacher1pw',
	});
	var class1 = Class.build({
		name: 'class1Teacher1',
	});
	var resource1 = Resource.build({
		url: 'url1forclass1',
	});
	teacher1.save().then(function () {
		class1.save().then(function () {
			// teacher1.setClass(this);
			this.setTeacher(teacher1);
			resource1.save().then(function () {
				this.setClass(class1);
			});
		});
	});
});

