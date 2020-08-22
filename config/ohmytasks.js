const chalk = require('chalk');

module.exports.ohmytasks = {

  toDo: [
    {
      tasks: ['globals']
    }
  ],

  before: function(sails, cb){
    console.log(chalk.cyan('---------------- Loading config ----------------'));
    return cb();
  },

  onLift: function(){
    console.log(chalk.cyan('*****************************************************************'));
    console.log(chalk.cyan('Starting server with:\n'));
    console.log(chalk.cyan(`Environment:  .................. ${sails.config.environment}`));
    console.log(chalk.cyan(`Database:  ..................... ${sails.config.connections[sails.config.environment].database}`));
    console.log(chalk.cyan(`Port:  ......................... ${sails.config.port}`));
    console.log(chalk.cyan(`Migration:  .................... ${sails.config.models.migrate}\n`));
    console.log(chalk.cyan('*****************************************************************'));
  },

  after: function(sails, cb){
    console.log(chalk.cyan('---------------- Done ----------------\n'));
    return cb();
  },

  dirname: 'ohmytasks'
}
