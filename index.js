const express = require('express') 
const mongoose = require('mongoose') 
const bodyParser = require('body-parser') 
const cors = require('cors') 
const allroutes = require('./routes/index.js') 

const app = express();

app.use(cors({
    origin : "*", 
    credentials : true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true})) 

//Here we are connecting project to database mongodb
mongoose.connect('mongodb+srv://aswinannalath:poison@cluster0.bszqfht.mongodb.net/', )   //{useNewUrlParser: true, useUnifiedTopology: true}
.then(() => {console.log("Connected to database")})
.catch((error) => {console.log("Error connecting to database",error)})

app.use("/", allroutes)


app.listen(5000, () => {console.log("Server is running on port 5000")})

