const mongoose = require('mongoose');

const ReclamacaoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pendente', 'resolvida'],
        default: 'pendente',
    },
    tipo: {
        type: String,
        enum: ['barulho', 'limpeza', 'infraestrutura', 'segurança', 'outros'],
        required: true,
    },
    data: {
        type: Date,
        default: Date.now, // Definir a data da reclamação como a data de criação
    },
    unidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unidade', // Referência para a unidade do condomínio (se aplicável)
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referência para o usuário que fez a reclamação (se aplicável)
    },
}, { timestamps: true });

module.exports = mongoose.model('Reclamacao', ReclamacaoSchema);
