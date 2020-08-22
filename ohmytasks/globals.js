
const path          = require('path');
const Sequelize     = require('sequelize');
const env           = process.env.NODE_ENV || 'development';
const env_database  = sails.config.environment || 'test';
const config        = require(path.resolve(__dirname, '../config/config.json'))[env];




module.exports = function(sails, next) {

  console.log('-> Setting global variables');
  global.sequelize = new Sequelize(config.database, config.user, config.password, config);

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  return next();
}
