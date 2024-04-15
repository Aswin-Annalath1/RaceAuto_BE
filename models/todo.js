// Creatng schema for Todo route...

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required : true,
        },
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    //Here we refer to the Db of User created
            required: true,
        },
        status : {
            type : String,
            default : "Complete ?",
        }

    },
    {
        timestamps : true
    })

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo