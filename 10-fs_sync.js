//file module can be done with 2 flavors - sync(blocking) and async(non-blocking)

//sync
const { readFileSync, writeFileSync } = require('fs')

//To write into a new file
//If file does not exist, a new one gets created
//If file exists, it gets overwritten by the new content

const a = writeFileSync('./content/first.txt','Text file 1')
const b = writeFileSync('./content/second.txt','Text file 2')

//To read a file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,'\n',second)

//To append to a file
const a_append = writeFileSync('./content/first.txt',`Appended ONE: ${first}\n${second}`, {flag:'a'})
const b_append = writeFileSync('./content/second.txt',`Appended TWO: ${second}\n${first}`, {flag:'a'})
console.log(a_append)
console.log(b_append)

// Practically, writing into a file wouldn't need to be assigned a variable
