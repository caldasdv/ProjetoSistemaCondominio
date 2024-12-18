const mongoose = require("mongoose");

const DocumentoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        data_publicacao: {
            type: Date,
            default: Date.now,
        },
        tipo: {
            type: String,
            enum: ["regulamento", "aviso", "manual", "outro"],
            required: true,
        },
        arquivo: {
            type: String, // URL ou caminho do arquivo, caso seja necessário fazer upload de documentos
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Documento", DocumentoSchema);
