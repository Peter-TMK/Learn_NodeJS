const express = require('express');
const app = express()
const {people, products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
    // in express, send is used instead of end
})
// app.get('/api/products', (req, res)=>{
//     const newProducts = products.map((product)=>{
//         const { id, name, image } = product
//         return { id, name, image }
//     })
//     res.send(newProducts)
// })

//To return data with a specific info such as id=============


app.get('/api/products/1', (req, res)=>{
    const singleProduct = products.find((product)=> product.id === 1)
    // res.send(singleProduct)
    res.json(singleProduct)
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})

// Let's make the above code more scalable to accept multiple routes