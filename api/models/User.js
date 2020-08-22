
/**
 * User.js
 *
 */

const roles = ['superadmin', 'staff', 'manager', 'delivery'];

module.exports = {
  attributes: {
    uid: {
      type: Sequelize.STRING(50),
      required: false,
      unique: true
    },

    name: {
      type: Sequelize.STRING(75),
      required: false,
      unique: false
    },
    lastName: {
      type: Sequelize.STRING(75),
      required: false,
      unique: false
    },
    phone: {
      type: Sequelize.STRING(15),
      required: true,
      unique: false,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(100),
      required: true,
      unique: true,
      allowNull: false
    },
    email_verified: {
      type: Sequelize.BOOLEAN,
      required: false,
    },
    password: {
      type: Sequelize.STRING(255),
      required: true
    },
    picture: {
      type: Sequelize.BOOLEAN,
      required: false,
      defaultValue: false
    },
    disabled: {
      type: Sequelize.BOOLEAN,
      required: false,
      defaultValue: false
    },
    role: {
      type: Sequelize.ENUM(roles)
    }
  },
};
