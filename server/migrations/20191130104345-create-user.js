'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customernumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
        validate : {
          len: [2,150]
        }
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
        validate : {
          len: [2,150]
        }
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate : {
         is : /^[^A-Za-z0-9]+$/i
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          max: 300
        }
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate : {
          len: [2,150]
        }
      },
      repeatPassword: {
        allowNull: false,
        type: Sequelize.STRING,
        validate : {
          len: [2,150]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};