const express = require('express');
const { retrieveTodo, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();
router.get('/', retrieveTodo);
router.post('/', addTodo);
router.put('/:todoId', updateTodo);
router.delete('/:todoId', deleteTodo);
module.exports = router;