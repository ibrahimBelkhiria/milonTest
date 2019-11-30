'use strict';
const Sequelize = require("sequelize");
const sequelize = require('../database/connection');
module.exports = sequelize.define('User', {
    customernumber: Sequelize.INTEGER,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    dateOfBirth: Sequelize.DATE,
    password: Sequelize.STRING,
    repeatPassword: Sequelize.STRING
});