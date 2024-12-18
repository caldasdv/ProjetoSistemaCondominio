const express = require("express");
const router = express.Router();
const documentoController = require("../controllers/documentoController");

// Criar um novo documento ou comunicado
router.post("/", documentoController.store);

// Listar todos os documentos e comunicados
router.get("/", documentoController.show);

// Buscar um documento ou comunicado por ID
router.get("/:id", documentoController.index);

// Atualizar um documento ou comunicado
router.put("/:id", documentoController.update);

// Deletar um documento ou comunicado
router.delete("/:id", documentoController.destroy);

module.exports = router;
