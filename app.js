const express = require('express')

const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./key')
require('./models/user')



mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=>{
    console.log('Connected to MongoDb')
})
mongoose.connection.on('Error', (err)=>{
    console.log('Error connected to MongoDb', err)
})

app.listen(PORT , ()=>{
    console.log('Server is running on' ,  PORT)
})