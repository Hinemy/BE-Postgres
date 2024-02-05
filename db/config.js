//Colocamos los archivos de conexion para que el cli pueda conectarse a la base de datos
const { config } = require('./../config/config'); 

//Encriptamos variables que son delicadas 
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//Creamos la Url de conexión que normalmente nos la provee nuestra DB
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    development:  {
        url:URI,
        dialect:'postgres',
    },
    production:  {
        url: URI,
        dialect: 'postgres',
    }
}