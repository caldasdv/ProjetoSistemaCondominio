const mongoose = require('mongoose');

const UnidadeSchema = new mongoose.Schema({
    numero: { type: String, required: true },
    bloco: { type: String, required: true },
    proprietario: { type: String, required: true },
    moradores: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('unidade', UnidadeSchema);
