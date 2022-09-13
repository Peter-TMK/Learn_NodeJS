const express = require('express');
const app = express()
const logger = require('./logger')
// req ======> middleware ========> res
// the middleware sits in between the request and the respond

// app.get('/', (req, res)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     // If we wanna have the same functionality in the about page, we'd need to copy and paste lines 8 - 11
//     // But that's not scalable if we have so many routes/pages to work with.
//     // A better solution is to use a function
//     res.send("<h1>Home</h1><br><a href='http://localhost:5050/about'>Go to about </a>")
// })

// app.get('/about', (req, res)=>{
//     res.send("<h1>About</h1><br><a href='http://localhost:5050'>Go back to homepage </a>")
// })

// app.listen(5050, ()=>{
//     console.log('Server is listening on port 5050...')
// })

// Let's make the above code more scalable =================>>>>>>>>>>>>>>>>>>>


// const logger = (req, res, next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     // res.send('Response!')
//     next()
// }
// when you run this code and refresh the homepage in the browser, it keeps loading- Therefore, whenever you use a middleware,
//you MUST pass it on to a next middleware, unless you're terminating a whole circle by sending back the response yourself
// on line 34, we sent back the response ourself.
// on line 35, we pass it on to a next middleware.

// Now let's place the middleware in a seperate file

app.use('/api',logger) // here, order matters - if app.use is placed below the homepage route,
// then the middleware wont run accordingly in the homepage
// we can as well specify a path

app.get('/', (req, res)=>{ // in this case, 'logger' is the middleware

    res.send("<h1>Home</h1><br><a href='http://localhost:5050/about'>Go to about </a>")
})

app.get('/about', (req, res)=>{ // let's take out all the logger from all functions and put in app.use
    res.send("<h1>About</h1><br><a href='http://localhost:5050'>Go back to homepage </a>")
})

app.get('/api/products', (req, res)=>{ // in this case, 'logger' is the middleware

    res.send("<h1>Products</h1><br><a href='http://localhost:5050'>Go back to homepage </a>")
})

app.get('/api/items', (req, res)=>{
    res.send("<h1>Items</h1><br><a href='http://localhost:5050'>Go back to homepage </a>")
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})

// ========================================================
// RE-WATCH MIDDLEWARE
// ===========================================================