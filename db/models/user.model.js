const { Model, DataTypes, Sequelize } = require('sequelize');

//Definimos el nombre de la tabla 
const USER_TABLE = 'users'; 

//Esquema que queremos que cree en la base de datos 
const UserSchema = {
    id: {
        allowNull: false, //Permite null
        autoIncrement: true, //Que sea autoincremental 
        primaryKey: true, //Si es nuestra llave primaria
        type: DataTypes.INTEGER, //Tipo de dato que esperamos 
    }, 
    email: {
        allowNull: false,
        type: DataTypes.STRING, 
        unique: true, // Es un campo unico
    }, 
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    createAt: { //Este es el nombre de como queremos manipularlo en js, en la propiedad field le indicamos como queremos que lo cree en la BD
        allowNull: false, 
        type: DataTypes.DATE, //Tipo de dato fecha 
        field: 'create_at', //name en la tabla
        defaultValue: Sequelize.NOW //Valor por defecto
    }
}

//Definimos clase con nuestro modelo para tener acceso a atributos de objetos 

class User extends Model {
    //Metodos estaticos: No necesito una declaracion del objeto para acceder a esos metodos, sirve para definri las asociaciones
    static associate() {
        //models - relaciones -associates
    }

    //Metodo de configuracion, normalmente recibe como parametro una configuracion que normalmente se llama sequelize y retorna una configuracion que incluye la que pasamos y otras cositas
    static config(sequelize) {
        return {
            sequelize, 
            tableName: USER_TABLE, //Nombre de la tabla
            modelName: 'User' , //Nombre del modelo, normalmente dejamos el nombre de la clase
            timestamps: false , //Empezar a crear campos por defectos
        }
    }
}

//Exportamos el nombre de la tabla , el esquema/tabla  y el modelo
module.exports = {USER_TABLE, UserSchema, User}