const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const Author = db.define('author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING('30'),
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING('30'),
        allowNull: false
    }
    },{
        timestamps: false,
})

module.exports = Author