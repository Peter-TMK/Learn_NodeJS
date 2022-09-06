const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.json([{ name:'John' }, { name:'Susan'}])
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})
