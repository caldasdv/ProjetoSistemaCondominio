const express = require("express");
const router = express.Router();
const blocoController = require("../controllers/blocoController");

// Lista todos os blocos
router.get("/", blocoController.show);

// Cria um novo bloco
router.post("/", blocoController.store);

// Atualiza as informações de um bloco
router.put("/:id", blocoController.update);

// Deleta um bloco
router.delete("/:id", blocoController.destroy);

module.exports = router;
