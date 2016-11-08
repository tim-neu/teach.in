const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Class = sequelize.define('classes', {
  name: {
    type: Sequelize.STRING,
  },

  startTime: {
    type: Sequelize.STRING,
  },

  endTime: {
    type: Sequelize.STRING,
  },

  date: {
    type: Sequelize.STRING,
  },

  enrolledNumber: {
    type: Sequelize.INTEGER,
  },

});

module.exports = Class;
