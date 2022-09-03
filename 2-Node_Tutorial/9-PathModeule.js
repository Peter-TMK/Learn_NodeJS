const path = require('path')
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//To get file name from where it is in the folder
const base = path.basename(filePath)
console.log(base)

//To return absolute path
const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath)