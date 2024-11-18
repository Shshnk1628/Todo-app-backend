//import the module
const Todo = require('../models/Todo');

//define route handler


exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entire Todo Data is fetched",
        })

        }
        catch(err) {
            console.error(err);
            console.log(err);
            res.status(500)
            .json({
                success:false,
                error:err.message,
                message:"Server Error",
            })

        }
    }

    exports.getTodoById = async(req,res) => {
        try{

            //extract todo items basis on ID
            const id = req.params.id;
            const todo = await Todo.findById({_id: id}); 

            //if data for given id is not found
            if(!todo) {
                return res.status(404)
                .json({
                    success:false,
                    message:"No data found with given id",
                })
            }

            //if data for given id is found\
                return res.status(200).json({
                    success:true,
                    data:todo,
                    message:`Todo ${id} data successfully fetched`,
                })
            
        }
        catch(err){
            return res.status(404)
                .json({
                    success:false,
                    message:"No data found with given id",
                })
        }
    }