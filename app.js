const express = require('express')

const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./key')
const customerMiddleware = (req , res  , next)=>{
    console.log('Middle ware executed')
    next()
}

mongoose.connect(
    MONGOURI)
mongoose.connection.on('connected', ()=>{
    console.log('Connected to MongoDb')
})
mongoose.connection.on('Error', (err)=>{
    console.log('Error connected to MongoDb', err)
})



//app.use(customerMiddleware)
app.get('/' , (req , res)=>{
    res.send('hello world this is testin23g 123')
})
app.get('/about' ,customerMiddleware, (req , res)=>{
    console.log('about')
    res.send('Abount page')
})


app.listen(PORT , ()=>{
    console.log('Server is running on' ,  PORT)
})