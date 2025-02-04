'use strict';

const Sequelize = require('sequelize');
const process   = require('process');
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users  = require("./user.model.js")(sequelize, Sequelize);
db.jobs   = require("./job.model.js")(sequelize, Sequelize);

module.exports = db;
