//Here we create router...

const {
    gettodos,
    gettodo,
    posttodos,
    deletetodos,
    updatetodo,
    updatetodostatus
} = require('../controller/todocontroller.js') //Imported from controller

const router = require('express').Router()

router.get("/:userid/", gettodos)
router.get("/:userid/:id", gettodo)
router.post("/:userid/", posttodos)
router.delete("/:userid/:id", deletetodos)
router.put("/:userid/:id", updatetodo)
router.put("/:userid/status/:id", updatetodostatus)

module.exports = router