const mongoose = require("mongoose");

const TaxaExtraSchema = new mongoose.Schema({
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
    data_cobranca: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("TaxaExtra", TaxaExtraSchema);
