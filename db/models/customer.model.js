const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');


const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW,
    }, //creamos el campo que va a relacionar user con customer
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        //LLave foranea
        references: {
            //Tabla a la que va relacionada, traemos el nombre de la tabla desde el modelo de esa entidad por si en alguna migracion cambia
            model: USER_TABLE,
            //Llave primaria de la otra tabla 
            key: 'id'
        },
        // Reglas de la relacion entre las tablas - Al eliminar y actualizar que va a pasar
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Customer extends Model {

    //Aqui van las asociaciones, le pasamos el modelo como parametro 
    static associate(models) {
        //le decimos que esta va a tener una relacion con el modelo de user, luego lo ejecutamos en el index
        this.belongsTo(models.User, { as: 'user' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };  