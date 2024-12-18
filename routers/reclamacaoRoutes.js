const express = require("express");
const router = express.Router();
const reclamacaoController = require("../controllers/reclamacaoController");

// Lista todas as reclamações
router.get("/", reclamacaoController.show);

// Busca uma reclamação por ID
router.get("/:id", reclamacaoController.index);

// Cria uma nova reclamação
router.post("/", reclamacaoController.store);

// Atualiza uma reclamação existente
router.put("/:id", reclamacaoController.update);

// Deleta uma reclamação
router.delete("/:id", reclamacaoController.destroy);

module.exports = router;
