const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const AssignmentStudents = sequelize.define('assignmentStudents', {
	grade: Sequelize.INTEGER,
}, {
	timestamp: false
});

module.exports = AssignmentStudents;