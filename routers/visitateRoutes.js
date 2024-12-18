const express = require("express");
const router = express.Router();
const visitanteController = require("../controllers/visitanteController");

// Adicionar um novo visitante
router.post("/", visitanteController.store);

// Listar todos os visitantes registrados
router.get("/", visitanteController.show);

// Buscar um visitante específico por ID
router.get("/:id", visitanteController.index);

// Atualizar status de um visitante (autorizado, finalizado)
router.put("/:id", visitanteController.update);

// Deletar um visitante (se necessário)
router.delete("/:id", visitanteController.destroy);

module.exports = router;
