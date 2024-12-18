const mongoose = require("mongoose");

// Schema de Itens da Encomenda
const ItemSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        quantidade: { type: Number, required: true },
        preco: { type: Number, required: true },
    },
    { _id: false },
); // _id: false para não criar um ID para cada item

// Schema da Encomenda
const EncomendaSchema = new mongoose.Schema(
    {
        cliente: { type: String, required: true },
        endereco: { type: String, required: true },
        itens: [ItemSchema],
        data: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ["em andamento", "entregue", "cancelada"],
            default: "em andamento",
        }, // Status da encomenda
        valorTotal: { type: Number, required: true }, // Valor total da encomenda
        bloco: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bloco", // Refere-se ao modelo de Bloco
            required: true, // O bloco é obrigatório
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Encomenda", EncomendaSchema);
