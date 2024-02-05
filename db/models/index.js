//Este archivo se encarga de enviar la conexion hacia los modelos y con esto podemos hacer todo el mapeo y serializacion de datos 

//Importamos los modelos 
const { User, UserSchema } = require('./user.model'); 


//Funcion de condiguracion de los modelos, por ende recibe la conexion
function setupModels(sequelize) {
    //Vamos al modelo y hacemos un init pasandole el esquema que debe seguir y la configuracion del modelo con el config que hicimos en el modelo
    User.init(UserSchema, User.config(sequelize)); 
}

module.exports = setupModels; 