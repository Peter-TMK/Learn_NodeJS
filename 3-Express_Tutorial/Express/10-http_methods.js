const express = require('express');
const app = express()
let { people } = require('./data') // using let here, because there mighht be some modifications

//static assests
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json({}))
// axios makes it a little bit easier setting up a http request, so we can use it in place of fetch
// reading the files
app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name value'})
    }
    res.status(201).json({success: true, person: name})
})
//you cannot just configure your browser to make a post request
//body is very essential when doing a post request
// to add, here's where the middleware comes in
// the values get added to req.body
// urlencoded is used here(check above code)
app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})

app.post('/login', (req, res)=>{
    // console.log(req.body)
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide your name')
})
app.put('/api/people/:id', (req, res)=>{
    const { id } = req.params
    const { name } = req.body
    // console.log(id, name)
    // res.send("Hello World")
    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople})
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050...')
})