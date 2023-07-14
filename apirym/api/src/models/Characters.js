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
    
        },
        location:{
            type: DataTypes.STRING,
       
        },
        origen:{
            type: DataTypes.STRING,
       
        },
        species:{
            type: DataTypes.STRING,

        },
        image:{
            type: DataTypes.STRING
        }

    })
}