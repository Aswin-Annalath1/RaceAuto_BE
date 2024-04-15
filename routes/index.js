
const todoroutes = require('./todoroutes.js')
const userroutes = require('./userroutes.js')
const  router = require('express').Router()


router.use("/todos", todoroutes)     
router.use("/users", userroutes)    

module.exports = router

