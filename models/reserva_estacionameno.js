const mongoose = require("mongoose");

const ReservaEstacionamentoSchema = new mongoose.Schema(
    {
        unidade: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unidade", // Referência para a unidade do morador
            required: true,
        },
        vaga: {
            type: String, // Número ou identificação da vaga
            required: true,
        },
        data_reserva: {
            type: Date,
            required: true,
        },
        hora_inicio: {
            type: String,
            required: true,
        },
        hora_fim: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model(
    "ReservaEstacionamento",
    ReservaEstacionamentoSchema,
);
