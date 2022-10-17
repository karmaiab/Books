const Author = require('./author')
const Book = require('./book')
const db = require ('../config_db')
const { Sequelize } = require('sequelize')

const BookAuthor = db.define('BookAuthor', {
  AuthorId: {
    type: Sequelize.INTEGER,
    references: {
      model: Author,
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
            fields: ["BookId", "AuthorId"]
        }
    ]
});

module.exports = BookAuthor