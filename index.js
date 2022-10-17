let Category = require('./models/category')
let Author = require('./models/author')
let Book = require('./models/book')
let BookCategory = require('./models/book_categories')
let BookAuthor = require('./models/book_author')

//Category.sync({alter: true})
//Author.sync({force: true})
//Book.sync({alter: true})
//BookCategory.sync({force: true})
//BookAuthor.sync({force: true})

// const express = require("express")
// const cors = require("cors")

// const app = express()

// app.use(cors())

// // parse requests of content-type - application/json
// app.use(express.json())

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to library RESTful API" })
// })

// require("./routes/categoryRoutes")(app);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`)
// })

