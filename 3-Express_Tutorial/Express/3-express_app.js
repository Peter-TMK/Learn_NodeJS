const express = require('express');
const app = express()
const path = require('path')
console.log(__dirname)

// set up static and middleware - static means an asset/or a file that the server doesnt have to change
// examples are the image, style, js etc files
app.use(express.static('./public'))

// app.get("/",(req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar_app/index.html'))
//     // OR USE JOIN res.sendFile(path.join(__dirname, './navbar_app/index.html'))
// })

// index.html is also a static file and using sendFile with index.html, it better we use 2 ways, which are:
// 1) Adding to statis assset(by just copying the index.html into the public directory and commenting the above lines 10 to 13)
// 2) SSR- server side rendering(Using template string)

app.all("*",(req, res)=>{
    res.status(404).send('Resource Not Found!')
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})
 