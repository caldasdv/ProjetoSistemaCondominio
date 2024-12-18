const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes"); 
const unidadeRoutes = require("./unidadeRoutes"); 
const reservaRoutes = require("./reservaRoutes"); 
const financeiroRoutes = require("./financeiroRoutes"); 
const ocorrenciaRoutes = require("./ocorrenciaRoutes"); 
const taxaExtraRoutes = require("./taxaExtraRoutes"); 
const encomendaRoutes = require("./encomendaRoutes"); 
const avisoRoutes = require("./avisoRoutes"); 
const reservaEstacionamentoRoutes = require("./reservaEstacionamentoRoutes"); 
const documentoRoutes = require("./documentoRoutes"); 
const visitanteRoutes = require("./visitanteRoutes"); 

// Definindo as rotas para cada recurso
router.use("/user", userRoutes); // /api/user
router.use("/unidade", unidadeRoutes); // /api/unidade
router.use("/reserva", reservaRoutes); // /api/reserva
router.use("/financeiro", financeiroRoutes); // /api/financeiro
router.use("/ocorrencia", ocorrenciaRoutes); // /api/ocorrencia
router.use("/taxa-extra", taxaExtraRoutes); // /api/taxa-extra
router.use("/encomenda", encomendaRoutes); // /api/encomenda
router.use("/aviso", avisoRoutes); // /api/aviso
router.use("/reserva-estacionamento", reservaEstacionamentoRoutes); // /api/reserva-estacionamento
router.use("/documento", documentoRoutes); // /api/documento
router.use("/visitante", visitanteRoutes); // /api/visitante

module.exports = router;
