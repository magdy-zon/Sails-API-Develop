'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> Cnfg global variables with ohmytasks
          // Whe try to code
          // Whe try to code
          // Whe try to code
          // Whe try to code
          // Whe try to code
          // Whe try to code
=======
      // Whe try to code
>>>>>>> (FEAT): Add new models and code commit
<<<<<<< HEAD
>>>>>>> c03ffe3... Cnfg global variables with ohmytasks
=======
>>>>>>> 49a823b... (FEAT): Add new models and code commit and another commits
=======
>>>>>>> Cnfg global variables with ohmytasks
    }
  };
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
