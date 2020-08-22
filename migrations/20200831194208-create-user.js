
const rols = ['superadmin', 'staff', 'manager', 'delivery'];


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      picture: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      disabled: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: false
      },
      role: {
        type: Sequelize.ENUM(rols),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
