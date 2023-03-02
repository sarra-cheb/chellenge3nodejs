const express = require('express');
const { updateUser, deleteUser, addUser, retrieveUserById, retrieveUser, affecte, dessaffecte } = require('../controllers/userController');
const router = express.Router();
router.get('/', retrieveUser);
router.get('/:id', retrieveUserById);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/affecte/:userid/:todoid', affecte)
router.put('/dessaffecte/:userid/:todoid', dessaffecte)
module.exports = router;