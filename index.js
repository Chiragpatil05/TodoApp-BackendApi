const express = require('express');
const app = express();

// loading data from env file
require("dotenv").config();
// for any reason if PORT cannot come from process.env.PORT then use the port 3000
const PORT  = process.env.PORT || 3000;

// middleware to parse json request body (used in controller)
// now we have used express.json() to parse the body data
app.use(express.json());

// import todos routes
const todoRoutes = require("./routes/todos");

// mount the todo api routes "/api/v1" => "https://localhost:3000/api/v1/routes.."
app.use("/api/v1",todoRoutes);

// start the server at port
app.listen(PORT ,()=>{
    console.log(`server started successfully at port ${PORT}`);
})

// connection to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/" , (req,res)=>{
    res.send(`<h1>This is the Todo App homepage</h1>`); 
})