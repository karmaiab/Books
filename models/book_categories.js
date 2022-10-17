const Category = require('./category')
const Book = require('./book')
const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const BookCategory = db.define('BookCategory', {
  BookId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Book,
      key: 'id'
    }
  },
  CategoryId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  }
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["BookId", "CategoryId"]
        }
    ]
});

module.exports = BookCategory
