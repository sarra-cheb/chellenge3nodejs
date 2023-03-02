const User = require('../models/user');
exports.retrieveUser = async (req, res) => {
  try {
    const users = await User.find()
    res.send({ message: 'listes', users })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.retrieveUserById = async (req, res) => {
  try {
    const found = await User.findById(req.params.id).populate('todos')
    res.send({ message: 'user ', found })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}

exports.addUser = async (req, res) => {
  try {
    await User.create(req.body)

    res.send({ message: 'ajouter avec succes' });

  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'updated' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id)
    res.send({ message: 'deleted successfully' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.affecte = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.userid, { $push: { todos: req.params.todoid } })
    res.send({ message: ' todo affected ' })

  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })

  }
}

exports.dessaffecte = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.userid, { $pull: { todos: req.params.todoid } })
    res.send({ message: ' todo dessaffected ' })

  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })

  }
}