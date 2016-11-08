const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const classGPA = sequelize.define('classGPAs', {

  GPA: {
    type: Sequelize.DECIMAL,
  },

  date: {
    type: Sequelize.STRING,
  },

});

module.exports = classGPA;
