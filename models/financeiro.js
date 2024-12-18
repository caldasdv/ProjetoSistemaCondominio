const mongoose = require('mongoose');

const FinanceiroSchema = new mongoose.Schema({
    tipo: { 
        type: String, 
        enum: ['receita', 'despesa'], 
        required: true 
    },
    descricao: { 
        type: String, 
        required: true 
    },
    valor: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    data: { 
        type: Date, 
        required: true 
    },
    categoria: { 
        type: String, 
        enum: ['conta', 'reserva', 'taxa_extra'], 
        required: true 
    },  // Identifica se a movimentação é de conta, reserva ou taxa extra
    unidade: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Unidade', 
        required: false 
    },  // Relaciona com uma unidade (se for uma reserva)
    taxa_extra: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TaxaExtra', 
        required: false 
    },  // Relaciona com uma taxa extra, se for o caso
    reserva: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Reserva', 
        required: false 
    },  // Relaciona com uma reserva, se for o caso
    conta: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Conta', 
        required: false 
    },  // Relaciona com uma conta do condomínio, se for o caso
}, { timestamps: true });

module.exports = mongoose.model('Financeiro', FinanceiroSchema);
