const express = require('express');
const router = express.Router();
const unidadeController = require('../controllers/unidadeController');

// Adiciona uma nova unidade
router.post('/', unidadeController.store);

// Lista todas as unidades
router.get('/', unidadeController.show);

// Busca unidade por ID
router.get('/:id', unidadeController.index);

// Deleta uma unidade por ID
router.delete('/:id', unidadeController.destroy);

// Atualiza uma unidade por ID
router.put('/:id', unidadeController.update);

module.exports = router;
