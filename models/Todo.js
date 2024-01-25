// mongoose is also used to create schema (description of data)
const mongoose = require('mongoose');

// here we are creating todoSchema using mongoose
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxlength:50,
        },
        description:{
            type:String,
            required:true,
            maxlength:70,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now()
        }
    }   
);

// exporting todoSchema as Todo
module.exports = mongoose.model("Todo",todoSchema);