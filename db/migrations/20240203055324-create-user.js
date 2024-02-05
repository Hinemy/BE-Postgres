'use strict';

//Las migraciones sirven para crear tabla, alter tabla, hacer modificaciones
//Nos traemos el modelo y el esquema(Tabla) para realizar la creacion/migracion de las tablas
const {UserSchema, USER_TABLE} = require('./../models/user.model'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    //Realizar la creacion de la tabla 
    await queryInterface.createTable(USER_TABLE, UserSchema); 
  },
  //Opcion para revertir los cambios hechos en up
  async down (queryInterface) {
    //Reversa la creacion de la tabla
    await queryInterface.drop(USER_TABLE); 
  }
};
