const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const Resource = sequelize.define('resources', {
  name: {
    type: Sequelize.STRING,
  },

  url: {
    type: Sequelize.STRING,
  },
});

module.exports = Resource;
