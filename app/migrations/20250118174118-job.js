'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', { 
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
          type: Sequelize.STRING(70)
      },
      description: {
          type: Sequelize.TEXT,
          defaultValue: null
      },
      company: {
          type: Sequelize.STRING(70)
      },
      location : {
          type: Sequelize.TEXT,
          defaultValue: null
      },
      type : {
          type: Sequelize.ENUM('Remote','On-Site','Hybrid'),
          defaultValue: 'Remote'
      },
      userId: {
          type: Sequelize.STRING(40)
      },
    },{
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
