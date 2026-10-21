const express = require('express');
const noteModel = require("./models/note.model")
const app = express()

//4 API using noteModels POST , GET , DELETE , UPDATE

app.use(express.json())

app.post('/notes', async(req , res)=>{

    const data = req.body
     await noteModel.create({
        title : data.title,
        description : data.description,
    })

    res.status(201).json({
        message : "Notes Created Successfully !!!"
    })

})

module.exports=app

