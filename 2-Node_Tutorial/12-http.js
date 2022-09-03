const http  = require("http")

//creating a server

// const server = http.createServer().listen(5000)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const server = http.createServer((req, res)=>{
//     res.write('Hello, and welcome to our page')
//     res.end()
// })

// server.listen(5000)


// =========================OR========================


// const server = http.createServer((req, res)=>{
//     if (req.url === '/'){
//         res.end('Welcome to our Homepage')
//     }
//     if (req.url === '/about'){
//         res.end('Here\'s what we do')
//     }
//     res.end(`<h1>Ooops!</h1>
//             <p>We can't find page</p>
//             <a href='/'>Return to Homepage</a>
//             `)
// })

// server.listen(5000)


// =========================OR========================


port = 5000
host_name = 'localhost'

const reqHandler = (req, res)=>{
        if (req.url === '/'){
            res.end('Welcome to our Homepage')
        }
        if (req.url === '/about'){
            res.end('Here\'s what we do')
        }
        res.end(`<h1>Ooops!</h1>
                <p>We can't find page</p>
                <a href='/'>Return to Homepage</a>
                `)
    }
const server = http.createServer(reqHandler)

server.listen(port, host_name, ()=>{
    console.log(`Server running at - http://${host_name}:${port}`)
})