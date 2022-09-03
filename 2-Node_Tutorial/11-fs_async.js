const { readFile, writeFile } = require("fs")

// Async(non-blocking)
// Here, we use readFile and writeFile instead of readFileSync and writeFileSync
// We also need to specify a callback
// A callback runs when all other functionalities get executed 

readFile('./content/third.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const third = result

    readFile('./content/fourth.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const fourth = result

        writeFile('./content/result-async.txt', `Here is the result of the both files: ${third}, ${fourth}`,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
})
})


const { appendFile } = require('fs')
const append = appendFile('./content/result-async.txt','Here, I am appending to original file',(err,result)=>{
    if(err){
     console.log(err)
    }
    console.log(result)
})
console.log(append)

// 2 ways to append are: {flag:'a'} and appendFile/appendFileSync(for sync)