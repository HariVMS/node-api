const { DataTypes }= require('sequelize');

const sequelize = require('../models/index');

const Product = sequelize.define("Item",{
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
});

module.exports = Product