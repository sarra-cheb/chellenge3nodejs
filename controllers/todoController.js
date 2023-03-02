const Todo = require('../models/todo');

exports.retrieveTodo = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.send({ message: 'todos ', todos })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.addTodo = async (req, res) => {
  try {
    await Todo.create(req.body)

    res.send({ message: 'ajouter avec succes' });

  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'updated' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id)
    res.send({ message: 'deleted successfully' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
