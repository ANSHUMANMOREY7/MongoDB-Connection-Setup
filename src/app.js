const express = require('express');
const noteModel = require("./models/note.model")
const app = express()

//4 API using noteModels POST , GET , DELETE , UPDATE

app.use(express.json())



module.exports=app

