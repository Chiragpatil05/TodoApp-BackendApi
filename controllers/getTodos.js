//getTodos route simply means we have to fetch all todos from database

// importing todoschema model
const Todo = require('../models/Todo');

// "/getTodos" route handler
exports.getTodos = async(req,res) =>{
    try{
        //fetch all the items or Todos form database
        // .find({}) is used to get items from database and empty{} means we have to fetch all the data
        const todos = await Todo.find({});

        // send a json response with success flag
        res.status(200).json({
            success:true,
            data:todos,
            message:"all todo data fetched successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).josn({
            success:false,
            error:err.message,
            message:"internal server error"
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            return res.status(404).json({
            success: false,
            message: "No Data Found with Given Id",
        });
    }
    res.status(200).json({
        success: true,
        data: todo,
        message: "Success",
    });
    } catch (err) {
        console.error(err);
        res.status(500).json({
        success: false,
        error: err.message,
        message: "Server error",
    });
    }
};