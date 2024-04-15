//Here we write logic to be done.. 
const Todo = require('../models/todo.js') 

//Function to get all in  page
module.exports.gettodos = async(req,res) => {     
    try{
        const userID = req.params.userid    
        const todos = await Todo.find({userID : userID}) 
        res.json(todos)
    }
    catch(error){
        res.json(error)
    }
}
//Function to get a item in  page
module.exports.gettodo = async(req,res) => {     
    try{
        const userID = req.params.userid    
        const todo = await Todo.findById(req.params.id) 
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to post in page
module.exports.posttodos = async(req,res) => {
    try{
        const userID = req.params.userid    
        const todo = await Todo.create({         
            title : req.body.title,      
            userID : userID          
        })
        res.json(todo);
    }
    catch(error){
        res.json(error)
    }
}
//Function to delete one item in page..
module.exports.deletetodos = async(req,res) => {
    try{
        const userID = req.params.userid   
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to Update one item in page..
module.exports.updatetodo = async(req,res) => {
    try{
        const userID = req.params.userid    
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            title : req.body.title,
        })
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to Update status of a item in page..
module.exports.updatetodostatus = async(req,res) => {
    try{
        const userID = req.params.userid    
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            status : req.body.status,
        })
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}



