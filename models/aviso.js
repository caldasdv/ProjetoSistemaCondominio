const mongoose = require('mongoose');

const AvisoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        data: {
            type: Date,
            default: Date.now, // Definir a data do aviso como a data de criação
        },
        destinatario: {
            type: String, // Pode ser "todos", "moradores", "administradores", etc.
            enum: ["todos", "moradores", "administradores"],
            required: true,
        },
        bloco: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bloco", // Referência para o modelo Bloco, se você tiver um modelo de blocos
            required: false, // O bloco é opcional, pois o aviso pode ser para todos
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Aviso", AvisoSchema);
