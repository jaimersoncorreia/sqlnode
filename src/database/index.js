const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

/* Importando os models */
const User = require("../models/User");
const Address = require("../models/Address");

const connection = new Sequelize(dbConfig);

/* Iniciando os models */
User.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;
