const mongoose = require('mongoose');

const FinanceiroSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['receita', 'despesa'], required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    data: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('financeiro', FinanceiroSchema);
