const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define('episodes', {
   name:{
            type: DataTypes.STRING,
            allowNull: false
        },
     

    })
}