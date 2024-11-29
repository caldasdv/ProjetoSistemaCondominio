const express = require('express');
const router = express.Router();
const ocorrenciaController = require('../controllers/ocorrenciaController');

// Adiciona uma nova ocorrência
router.post('/', ocorrenciaController.store);

// Lista todas as ocorrências
router.get('/', ocorrenciaController.show);

// Busca ocorrência por ID
router.get('/:id', ocorrenciaController.index);

// Deleta uma ocorrência por ID
router.delete('/:id', ocorrenciaController.destroy);

// Atualiza uma ocorrência por ID
router.put('/:id', ocorrenciaController.update);

module.exports = router;
