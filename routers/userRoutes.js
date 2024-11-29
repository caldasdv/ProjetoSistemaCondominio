const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Adiciona um novo usuário
router.post('/', userController.store);

// Lista todos os usuários
router.get('/', userController.show);

// Busca usuário por email
router.get('/buscaemail', userController.index);

// Deleta um usuário por ID
router.delete('/:id', userController.destroy);

// Atualiza um usuário por ID
router.put('/:id', userController.update);

module.exports = router;
