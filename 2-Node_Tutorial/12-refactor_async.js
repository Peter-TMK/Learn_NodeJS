//async - behind the scene(promise, async await)
// const { readFile, writeFile } = require("fs")

// readFile('./content/third.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })


// >>>>>>>>>>>>Making it cleaner(with Promise)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8',(err, data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/third.txt')
// .then((result)=> console.log(result))
// .catch((err)=> console.log(err))


// >>>>>>>>>>>>Making it more cleaner(with Promise, async await)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8',(err, data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async ()=>{
//     try{
//         const first = await getText('./content/third.txt')
//         const second = await getText('./content/fourth.txt')
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// start()

// >>>>>>>>>>>>Making it more cleaner(with promisify, async await)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async ()=>{
//     try{
//         const first = await readFilePromise('./content/third.txt', 'utf8')
//         const second = await readFilePromise('./content/fourth.txt', 'utf8')
//         await writeFilePromise(
//             './content/result-mind-grenade.txt',
//             `This Is Awesome : ${first} ${second}`
//         )
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// start()

// >>>>>>>>>>>>Making it more cleaner(without promisify but with promises(from require), async await)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const { readFile, writeFile } = require("fs").promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    try{
        const first = await readFile('./content/third.txt', 'utf8')
        const second = await readFile('./content/fourth.txt', 'utf8')
        await writeFile(
            './content/result-mind-grenade.txt',
            `This Is Appended : ${first} ${second}`,
            {flag:'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
    
}
start()