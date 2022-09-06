const express = require('express')
const app = express() //or use const app = require('express')()

// since all browses perform get request(on default)
app.get('/', (req, res)=>{
    console.log('User hit the server!')
    res.status(200).send('Home Page')
})
app.get('/about', (req, res)=>{
    res.status(200).send('Here is what we do!')
})

// app.all('*') handles all http methods such as get, post etc
// * handles all path
app.all("*",(req, res)=>{
    res.status(404).send("<h1>Resource Not Found!</h1>")
})


app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})


// app.listen
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
