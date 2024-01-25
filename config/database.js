// database and server can be connected by mongoose
const mongoose = require('mongoose');

// all the .env file data is present in process object
require('dotenv').config();

// function dbConnect to establish database connection
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>
        console.log("Server and Databse connected successfully")
    )
    .catch((error)=>{
        console.log("Error in connecting server and databse");
        console.error(error.message);
        process.exit(1);
        // process.exit(1) means the process is exit or ended with some failure
        // process.exit(0) means the process is exit or ended without failure
    });
}

// exporting dbConnect function
module.exports = dbConnect;
