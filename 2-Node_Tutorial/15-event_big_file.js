//creating a big file

const { writeFileSync } = require('fs')
for (let i = 0; i<100001; i++){
    writeFileSync('./content/big.txt', `Hello Earth ${i}\n`, {flag:'a'})
}