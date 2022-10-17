const books = require('./books.json')
const Category = require('./models/category')
const Author = require('./models/author')
const Book = require('./models/book')
const BookAuthor = require('./models/book_author')
const BookCategory = require('./models/book_categories')

//let categories = new Set();
/*for(item of books){
    if (item['categories'].length>0) {
        item['categories'].forEach(element =>{
            categories.add(element)
        });
    }
}

console.log(categories);
categories.forEach(element => {
    Category.create({name:element})
});

let authors = new Set();
for(item of books){
    if (item['authors'].length>0) {
        item['authors'].forEach(element =>{
            if(element.length > 0 && element.split(' ').length <= 3)
                authors.add(element)
        });
    }
}

console.log(authors);
authors.forEach(element => {
    if (element.split(' ').length == 3) {
        Author.create({firstname:element.split(' ')[0]+" "+element.split(' ')[1], lastname:element.split(' ')[2]})
    }
    if (element.split(' ').length == 2) {
        Author.create({firstname:element.split(' ')[0], lastname:element.split(' ')[1]})
    }
    if (element.split(' ').length == 1) {
        Author.create({firstname:element.split(' ')[0], lastname:element.split('')['']})
    }
}); */

// for(item of books){
    // if(item['publishedDate']===undefined){
    //     published_date="NULL"
    // }else {
    //     published_date=item['publishedDate']['$date']
    // }
    // if(item['shortDescription']===undefined){
    //     short_description="NULL"
    // }else {
    //     short_description=item['shortDescription']
    // }
    // if(item['longDescription']===undefined){
    //     long_description="NULL"
    // }else {
    //     long_description=item['longDescription']
    // }
    // Book.create({title:item['title'], isbn:item['isbn'], pageCount:item['pageCount'], publishedDate:published_date, thumbnailUrl:item['thumbnailUrl'],
    // shortDescription:short_description, longDescription:long_description, status:item['status']
    // })
// }
async function readBooks(data){
    for(item of data){
        if(item['publishedDate']===undefined){
            published_date="NULL"
        }else {
            published_date=item['publishedDate']['$date']
        }
        if(item['shortDescription']===undefined){
            short_description="NULL"
        }else {
            short_description=item['shortDescription']
        }
        if(item['longDescription']===undefined){
            long_description="NULL"
        }else {
            long_description=item['longDescription']
        }
        Book.create({title:item['title'], isbn:item['isbn'], pageCount:item['pageCount'], publishedDate:published_date, thumbnailUrl:item['thumbnailUrl'],
        shortDescription:short_description, longDescription:long_description, status:item['status']
        })
        BookID = Book.id
        categories = item['categories']
        for (let i = 0; i < categories.length; i++) {
            const title = categories[i].charAt(0).toUpperCase() + categories[i].slice(1)
            const category = await Category.findOne({
                where: { title:title },
                attributes:['id'],
                raw: true
            })
            if (category != null) {
                await BookCategory.create({ BookId: Book.id, CategoryId:category.id})
            }
        }
    }
}