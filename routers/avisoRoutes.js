const express = require("express");
const router = express.Router();
const avisoController = require("../controllers/avisoController");

// Lista todos os avisos
router.get("/", avisoController.show);

// Busca um aviso por ID
router.get("/:id", avisoController.index);

// Cria um novo aviso
router.post("/", avisoController.store);

// Atualiza um aviso existente
router.put("/:id", avisoController.update);

// Deleta um aviso
router.delete("/:id", avisoController.destroy);

module.exports = router;
