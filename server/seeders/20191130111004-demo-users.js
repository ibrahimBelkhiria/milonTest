'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      customernumber: '00001',
      firstname: 'john',
      lastname: 'doe',
      username: 'demojohn',
      email: 'john@demo.com',
      dateOfBirth: '26.11.1995',
      password: '12345678',
      repeatPassword: '12345678',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      customernumber: '00002',
      firstname: 'ibrahim',
      lastname: 'belkhiria',
      username: 'ibrahimBelkhiria',
      email: 'ibrahim@demo.com',
      dateOfBirth: '25.12.1996',
      password: '12345678',
      repeatPassword: '12345678',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ,{
      customernumber: '00003',
      firstname: 'Simon',
      lastname: 'Heinz',
      username: 'SimonH',
      email: 'Simon@demo.com',
      dateOfBirth: '25.12.1985',
      password: '12345678',
      repeatPassword: '12345678',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
