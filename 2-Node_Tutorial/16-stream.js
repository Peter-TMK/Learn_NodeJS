//using a stream to read file. It helps to handle large data in chunks
// default  - 64kb
// last buffer - remainder
// highWaterMark - controls size

const { createReadStream, fstat } = require('fs')
const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result)=>{
    // console.log(result) uncomment this part to run 100000 lines of code
})

stream.on('error', (err)=>{
    console.log(err)
})
// to run the above error code, just supply a wrong file path