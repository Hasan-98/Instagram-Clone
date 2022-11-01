const express = require('express') ,  bodyParser = require('body-parser');

const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./key')
require('./models/user')
app.use(express.json())
app.use(bodyParser.json());
app.use(require('./routes/auth'))


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