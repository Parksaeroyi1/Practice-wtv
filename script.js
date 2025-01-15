const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const Note = require('./models/Model')
const PORT = 8000;
app.use(express.json());
app.use(cors())

app.post('/notes', async(req, res) => {
    console.log("trigger notes", req.body)
    try {
        const note = await Note.create(req.body)
        res.status(200).json(note)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get('/notes', async(req, res) => {
    try {
        const notes = await Note.find({})
        res.status(200).json(notes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get('/', async(req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Node is running on port 8000')
    mongoose.
    connect('mongodb+srv://Admin:0TziHSaQ05vI6bxp@cluster0.md5e7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected to MongoDB')
    })
})

