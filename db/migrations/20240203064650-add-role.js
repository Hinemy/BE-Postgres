'use strict';


//Las migraciones sirven para crear tabla, alter tabla, hacer modificaciones
//Nos traemos el modelo y el esquema(Tabla) para realizar la creacion/migracion de las tablas
const {UserSchema, USER_TABLE} = require('./../models/user.model'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'role'); 
  }
};
