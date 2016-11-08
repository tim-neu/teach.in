const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Group = sequelize.define('groups', {
  name: {
    type: Sequelize.STRING,
  },

  type: {
    type: Sequelize.STRING,
  },

  admin: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Group;
