const mongoose = require('mongoose');

const OcorrenciaSchema = new mongoose.Schema({
    unidadeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unidade', required: true },
    descricao: { type: String, required: true },
    data: { type: Date, required: true },
    status: { type: String, enum: ['aberta', 'em andamento', 'resolvida'], default: 'aberta' },
}, { timestamps: true });

module.exports = mongoose.model('ocorrencia', OcorrenciaSchema);
