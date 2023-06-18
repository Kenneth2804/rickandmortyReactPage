const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define('characters', {

        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
            allowNull: false
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false
        },
        origen:{
            type: DataTypes.STRING,
            allowNull: false
        },
        species:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING
        }

    })
}