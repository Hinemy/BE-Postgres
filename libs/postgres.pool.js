const { Pool } = require('pg');

const { config } = require('../config/config'); 

//Encriptamos variables que son delicadas 
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//Creamos la Url de conexión que normalmente nos la provee nuestra DB
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({connectionString: URI});

module.exports = pool; 
