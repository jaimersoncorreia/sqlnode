"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("users", "age", {
            type: Sequelize.INTEGER
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("users", "age");
    }
};
