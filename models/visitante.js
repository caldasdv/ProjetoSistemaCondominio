const mongoose = require("mongoose");

const VisitanteSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        unidade_visitada: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unidade",
            required: true,
        },
        data_visita: {
            type: Date,
            required: true,
        },
        hora_entrada: {
            type: String,
            required: true,
        },
        hora_saida: {
            type: String,
            required: true,
        },
        documento_identidade: {
            type: String, // Pode ser número do RG ou CPF
        },
        status: {
            type: String,
            enum: ["pendente", "autorizado", "finalizado"],
            default: "pendente",
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Visitante", VisitanteSchema);
