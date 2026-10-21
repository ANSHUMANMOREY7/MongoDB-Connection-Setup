const express = require('express');
const noteModel = require("./models/note.model")
const app = express()

//4 API using noteModels POST , GET , DELETE , UPDATE

app.use(express.json())

//POST API -> CREATE NOTES
app.post('/notes', async(req , res)=>{

    const data = req.body
     await noteModel.create({      // CREATE() creates the DATABSE for Notes
        title : data.title,
        description : data.description,
    })

    res.status(201).json({
        message : "Notes Created Successfully !!!"
    })

})

//GET API -> FETCH NOTES FROM SERVER / DATABASE
app.get('/notes', async(req , res)=>{

    const notes = await noteModel.find()   // FIND() will scan and fetch all the NOTES in DATABASE in[] format return in [] only

    res.status(201).json({
        notes : notes ,
        message : "Notes Fetched Successfully !!!"
    })

})

//DELETE API => DELETE THE DATABASE USING ID 
app.delete('/notes/:id',async(req , res)=>{

    const id =req.params.id 
    await noteModel.findOneAndDelete ({ 
       _id : id
    })

    res.status(201).json({
         message : "Notes Deleted Successfully !!!"
    })

})

//PATCH => used to UPDATE a NOTES or NOTE using ID 
app.patch('/notes/:id',async (req , res)=>{

    const id = req.params.id
    const description = req.body.description
    const title = req.body.title
    await noteModel.findOneAndUpdate({ _id : id },{ description : description })
    await noteModel.findOneAndUpdate({ _id : id },{ title : title })

    res.status(201).json({
        message : "Notes Updated Successfully !!!"
    })
})
module.exports=app

