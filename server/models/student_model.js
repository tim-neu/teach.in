const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Student = sequelize.define('students', {
  name: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },

  password: {
    type: Sequelize.STRING,
  },
  
  picture_url: {
  	type: Sequelize.STRING,
  },

  gpa: {
    type: Sequelize.FLOAT,
  },
});

module.exports = Student;
