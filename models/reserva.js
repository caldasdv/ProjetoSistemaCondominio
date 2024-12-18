const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema({
    unidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unidade",
        required: true,
    },
    data_reserva: {
        type: Date,
        required: true,
    },
    periodo_inicio: {
        type: Date,
        required: true,
    },
    periodo_fim: {
        type: Date,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Reserva", ReservaSchema);
