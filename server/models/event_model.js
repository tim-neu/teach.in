const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Event = sequelize.define('events', {

  name: {
    type: Sequelize.STRING,
  },

  date: {
    type: Sequelize.STRING,
  },

  time: {
  	type: Sequelize.STRING,
  },

});

module.exports = Event;
