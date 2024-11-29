const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const unidadeRoutes = require('./unidadeRoutes');
const reservaRoutes = require('./reservaRoutes');
const financeiroRoutes = require('./financeiroRoutes');
const ocorrenciaRoutes = require('./ocorrenciaRoutes');

// Usando as rotas para cada modelo
router.use('/user', userRoutes);
router.use('/unidade', unidadeRoutes);
router.use('/reserva', reservaRoutes);
router.use('/financeiro', financeiroRoutes);
router.use('/ocorrencia', ocorrenciaRoutes);

module.exports = router;
