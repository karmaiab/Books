module.exports = app =>{
    const categories = require('../controllers/categoryController')
    const router = require("express").Router()

    // Create a new Category
    router.post("/", categories.create)

    //Retrieve all Categories
    router.get("/", categories.findAll)

    app.use('/api/categories', router)
}