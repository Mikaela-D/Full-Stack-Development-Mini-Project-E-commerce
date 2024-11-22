const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();

const uri = process.env.MONGO_URI;


async function connect() {
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    }catch(error){
        console.error("Error Connecting to Mongo:",error.message);
        process.exit(1);
    }
}

connect();
app.listen(8000, () => {
    console.log("Server started on port 8000");
});

