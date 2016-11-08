const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const groupMessage = sequelize.define('groupMessages', {
  text: {
    type: Sequelize.STRING,
  },
});

module.exports = groupMessage;

