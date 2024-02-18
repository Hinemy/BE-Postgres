'use strict';

const { CUSTOMER_TABLE, CustomerSchema} = require('../models/customer.model'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    //Realizar la creacion de la tabla 
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema); 
  },
  //Opcion para revertir los cambios hechos en up
  async down (queryInterface) {
    //Reversa la creacion de la tabla
    await queryInterface.drop(CUSTOMER_TABLE); 
  }
};
