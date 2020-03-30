const express = require('express')

const getProducts = require('./getProducts')

const app = express()
const PORT = 4001

app.get('/api/products', getProducts.getProducts)

app.get('/api/products/:id', getProducts.getProduct)

// app.get('/api/products', getProducts.getPrice)


app.listen(PORT, ()=> {
    console.log(`server listening on Port: ${PORT}`)
})