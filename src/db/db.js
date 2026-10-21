const mongoose = require('mongoose'); //to connnect server with datase we need a Package (MONGOOSE)

async function connectDB() {
    
    await mongoose.connect("mongodb+srv://anshumanmorey2_db_user:Morey123@backendpractice.15qrqwz.mongodb.net/Anshuman")//link from mongoDB compass  & /Anshuman refers to database inside the cluster link above when databse Anshuman found mongoose.connect will connect the databse and log it .

    console.log("connected to DB 🛢️")

}

module.exports = connectDB

