const express = require('express')
const router = express.Router()

const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()


// get a book
router.get('/byId/:id', async (req, res) => {
    try {
    const {id} = req.params
    const book = await prisma.book.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(book)
    } catch (error) {
        console.log(error)
    }
})

// get all books
router.get('/all', async (req, res) => {
    try {
        const books = await prisma.book.findMany()
        res.json(books)
    } catch (error) {
        console.log(error)
    }
})

// create a book
router.post('/create', async (req, res) => {
    try {
        const {title, author, cover, review } = req.body
        await prisma.book.create({
            data: {
                title: title,
                author: author,
                cover: cover,
                review: review
            }
        })
        res.json('Book created!')
    } catch (error) {
        console.log(error)
    }
})

// delete a book
router.delete('/deleteById/:id', async (req, res) => {
    const { id } = req.params
    await prisma.book.delete({
      where: { id: Number(id) },
    })
    res.json('Book deleted!')
})










module.exports = router