//create todo => means ki Todo type ki new object create karo and database mai save kar do
// createTodo is a POST METHOD  

// import the model or import the Todo schema bcos controller require model
const Todo = require("../models/Todo");

// function or a route handler or "/createTodo" route handler
// the function is asynchronous as it is "interacting with dataBase"
exports.createTodo = async(req,res) => {
    try{
        // extract title and description from request body
        const {title,description} = req.body;

        // create a new Todo object named response and insert it in the database
        // .create() is used to insert in the database
        const response = await Todo.create({title,description});

        // send a json response with successfull flag
        // status 200 = OK
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo created successfully"
        });
    }

    catch(err){
        console.log(err);
        console.error(err);

        // status 500 = internal server error
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
};

