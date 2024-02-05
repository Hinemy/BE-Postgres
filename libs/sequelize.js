const { Sequelize } = require('sequelize'); 

const setupModels = require('./../db/models'); 
const  { config }  = require('./../config/config'); 

//Encriptamos variables que son delicadas 
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//Creamos la Url de conexión que normalmente nos la provee nuestra DB
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
}); 

//Corremos el setupMOdels luego de la instancia de la conexion
setupModels(sequelize);
//Sincronizamos para que coja los modelos y cree la estructura
//--------> Se deja de sincronizar automaticamente ya que en produccion todo se hace por medio de migraciones (sequelize-cli en nuestro aprendizaje)
// sequelize.sync();  

module.exports = sequelize; 