const express = require("express");
const router = express.Router();
const encomendaController = require("../controllers/encomendaController");

// Lista todas as encomendas
router.get("/", encomendaController.show);

// Busca encomenda por ID
router.get("/:id", encomendaController.index);

// Cria uma nova encomenda
router.post("/", encomendaController.store);

// Atualiza uma encomenda existente
router.put("/:id", encomendaController.update);

// Deleta uma encomenda
router.delete("/:id", encomendaController.destroy);

module.exports = router;
