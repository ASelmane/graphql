'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Posts', [
            {
                text: 'Hello world!',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                text: 'Hello world again!',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Posts', null, {});
    },
};
