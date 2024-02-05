const boom = require('@hapi/boom');

//Importamos la conexion y el modelo de sequelize
const { models, sequelize } = require('./../libs/sequelize'); 

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    console.log(newUser); 
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll(); //Trae todo lo que hay en la tabla
    return rta; 
  }

  //El metodo findOne nos servirá para buscar en los demas metodos
  async findOne(id) {
    //Buscamos el usuario por el id con el metodo findByPk que sirve para buscar por la llave primaria
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound(' user not found '); 
    }
    //Retornamos 
    return user;
  }

  async update(id, changes) {
    //Buscamos el usuario por el id con el metodo findByPk que sirve para buscar por la llave primaria
    // const user = await models.User.findByPk(id);

    //Como el de arriba se nos vuelve repetitivo, usamos el metodo findOne para buscar ya que allá esta validando el error
    const user = await this.findOne(id); 
    //Guardamos la respuesta del update y le pasamos los cambios
    const rta = await user.update(changes); 
    return rta;
  }

  async delete(id) {
    //Buscamos el usuario por el id con el metodo findByPk que sirve para buscar por la llave primaria
    // const user = await models.User.findByPk(id);

    //Como el de arriba se nos vuelve repetitivo, usamos el metodo findOne para buscar ya que allá esta validando el error
    const user = await this.findOne(id); 
    //Con el metodo destroy eliminamos el registro de la base de datos 
    await user.destroy(); 
    return { id };
  }
}

module.exports = UserService;
