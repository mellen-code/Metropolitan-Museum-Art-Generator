const express = require('express')
const router = express.Router()
const favsController = require('../controllers/favs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, favsController.getHomePage)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router