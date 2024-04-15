//Here we are creating Db 

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')     

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required"],  
        trim: true,                             
        unique: true,                        
    },
    role:{
        type: String,
        default: "user"
    },
    email:{
        type: String,
        required: [true, "Email is required"],  
        trim: true,                              
        unique: true, 
    },
    password: {
        type: String,
        required: [true, "Password is required"],  

    }
})

// Here we are hashing our password before saving it to database...
userSchema.pre("save", async function(next){
    try{
        const salt = await bcrypt.genSalt(10)    
        const hashedPassword = await bcrypt.hash(this.password, salt) 
        this.password = hashedPassword   
        next() 
    }
    catch(error){
        next(error)
    }
})

//Here we are creating schema for login (re-entering) requirements...
userSchema.statics.login = async function(email,password){    //statics help use login outside (in usercontroller.js)
    try{
        const user = await this.model("User").findOne({email: email})
        if(!user){                           
            throw new Error("User not found")
        }
        const isMatch = await bcrypt.compare(password, user.password) 
        if(!isMatch){
            throw new Error("Incorrect password")
        }
        return user      //If all correct then user details are send to usercontroller.js file...
    }
    catch(error){
        throw new Error(error)
    }
}
const User = mongoose.model("User", userSchema) 
module.exports = User


