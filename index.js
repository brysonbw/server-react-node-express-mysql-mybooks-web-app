const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()


// middleware
app.use(express.json())
app.use(cors())

// book route
const bookRouter = require('./routes/books')


// routes
app.use('/api/books', bookRouter)


const PORT = process.env.PORT || 3007
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})