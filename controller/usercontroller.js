// Here we write logic to be done..
const User = require("../models/user")
const jwt = require("jsonwebtoken")     //Creating unique web token 

//Function to generate token created
const createToken = (id => {             //id taken from user data..
    return jwt.sign({id},"secret key",{  
        expiresIn : 3 * 24 * 60 * 60,
    })
})

// Here we create SignUp for the user  
module.exports.register = async(req,res) => {
    try{
        const user = await User.create({  
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
        })
        const token = createToken(user._id)  //Taking id from user in Db
        res.cookie("jwt", token, {httpOnly: false, maxAge: 3 * 24 * 60 * 60 * 1000}) //Storing user in cookie
        res.json(user) 
    }
    catch(error){
        res.json(error)
    }
}
// Here we create Login for the user 
module.exports.login = async(req,res) => {
    try{
        const user = await User.login(req.body.email,req.body.password) 
        const token = createToken(user._id)  
        res.cookie("jwt", token, {httpOnly: false, maxAge: 3 * 24 * 60 * 60 * 1000})
        res.json(user)
    }
    catch(error){
        res.json(error)
    }
}
// Here we create Logout for the user..
module.exports.logout = (req,res) => {
    res.cookie("jwt", "", {maxAge: 1}) 
    res.json({message: "Logged out"})
}