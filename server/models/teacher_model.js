const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

var Teacher = sequelize.define('teachers', {
  name: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },

  password: {
    type: Sequelize.STRING,
  },
});

module.exports = Teacher;
