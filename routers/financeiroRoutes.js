const express = require('express');
const router = express.Router();
const financeiroController = require('../controllers/financeiroController');

// Adiciona uma nova movimentação financeira
router.post('/', financeiroController.store);

// Lista todas as movimentações financeiras
router.get('/', financeiroController.show);

// Busca movimentação financeira por ID
router.get('/:id', financeiroController.index);

// Deleta uma movimentação financeira por ID
router.delete('/:id', financeiroController.destroy);

// Atualiza uma movimentação financeira por ID
router.put('/:id', financeiroController.update);

module.exports = router;
