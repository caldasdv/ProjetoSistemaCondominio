const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    unidadeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unidade', required: true },
    espaco: { type: String, required: true },
    data: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('reserva', ReservaSchema);
