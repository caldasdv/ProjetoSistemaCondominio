const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Adiciona uma nova reserva
router.post('/', reservaController.store);

// Lista todas as reservas
router.get('/', reservaController.show);

// Busca reserva por ID
router.get('/:id', reservaController.index);

// Deleta uma reserva por ID
router.delete('/:id', reservaController.destroy);

// Atualiza uma reserva por ID
router.put('/:id', reservaController.update);

module.exports = router;

