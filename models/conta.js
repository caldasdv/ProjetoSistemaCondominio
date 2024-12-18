const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
        min: 0,
    },
    vencimento: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["paga", "pendente"],
        required: true,
    },
});

module.exports = mongoose.model("Conta", ContaSchema);
