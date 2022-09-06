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
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar_app/index.html')
const homeStyles = readFileSync('./navbar_app/styles.css')
const homeImage = readFileSync('./navbar_app/logo.svg')
const homeLogic = readFileSync('./navbar_app/browser-app.js')

const server = http.createServer((req, res)=>{
    const url = req.url
    console.log(url)
    // Home page
    if (url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    } else if (url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    } else if (url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    } else if (url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000)