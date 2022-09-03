//Install express on dependencies
//Install nodemon on devDependencies

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     // console.log('User hit the server')
//     // res.end('home page')
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>Home Page</h1>')
//     res.end()
// })
// server.listen(5000)


//>>>>>>>>>>>>>>>> Going Further >>>>>>>>>>>>>>>>>>>>>>>

const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url
    // Home page
    if (url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000)