const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Assignment = sequelize.define('assignments', {
  name: {
    type: Sequelize.STRING,
  },

  type: {
    type: Sequelize.STRING,
  },

  grade: {
    type: Sequelize.STRING,
  },

  dueDate: {
    type: Sequelize.STRING,
  },

});

module.exports = Assignment;
