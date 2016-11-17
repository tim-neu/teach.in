const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Event = sequelize.define('events', {

  title: {
    type: Sequelize.STRING,
  },

  date: {
    type: Sequelize.DATE,
  },

  start: {
  	type: Sequelize.DATE,
  },

  end: {
  	type: Sequelize.DATE,
  },

});

module.exports = Event;
