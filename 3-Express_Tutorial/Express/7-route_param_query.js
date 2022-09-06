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

//In express, a route parameter begins with a colon :
// and then whatever name you want. This is just like a placeholder
app.get('/api/products/:productID', (req, res)=>{
    // console.log(req)
    // console.log(req.params)
    //let's destructure the parameter for general use
    const {productID} = req.params
    // const singleProduct = products.find((product)=> product.id === 1) // notice how the id is returned as a string
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product does not exist!')
    }
    // res.send(singleProduct)
    return res.json(singleProduct)
})
// route params can get way more complex than the above, example below
app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send('Hello world')
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})

// Let's make the above code more scalable