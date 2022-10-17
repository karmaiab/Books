const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const Category = db.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING('50'),
        allowNull: false
    }
    },{
        timestamps: false,
})


module.exports = Category
