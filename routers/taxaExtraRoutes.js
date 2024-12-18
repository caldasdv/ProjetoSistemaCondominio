const express = require('express');
const router = express.Router();
const taxaExtraController = require('../controllers/taxaExtraController');

// Lista todas as taxas extras
router.get('/', taxaExtraController.show);

// Busca uma taxa extra por ID
router.get('/:id', taxaExtraController.index);

// Cria uma nova taxa extra
router.post('/', taxaExtraController.store);

// Atualiza uma taxa extra
router.put('/:id', taxaExtraController.update);

// Deleta uma taxa extra
router.delete('/:id', taxaExtraController.destroy);

module.exports = router;
