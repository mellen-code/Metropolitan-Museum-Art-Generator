const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getIndex)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router