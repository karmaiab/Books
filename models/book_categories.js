const Category = require('./category')
const Book = require('./book')
const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const BookCategory = db.define('BookCategory', {
  CategoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  },
  BookId: {
    type: Sequelize.INTEGER,
    references: {
      model: Book,
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
