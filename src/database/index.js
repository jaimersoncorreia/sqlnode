const Sequlize = require("sequelize");
const dbConfig = require("../config/database");

const connetion = new Sequlize(dbConfig);

module.exports = connetion;
