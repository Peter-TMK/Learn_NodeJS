const express = require('express');
const app = express()
const {people, products} = require('./data')

app.get('/', (req,res)=>{
    res.json(products)
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})
