const mongoose = require("mongoose");

const UnidadeSchema = new mongoose.Schema(
  {
    numero: { type: String, required: true },
    tipo: { 
      type: String,
      enum: ['residencial', 'comum'], // 'residencial' para unidades de apartamentos, 'comum' para unidades de uso comum
      required: true,
    },
    bloco: {
      type: mongoose.Schema.Types.ObjectId, // Referência para o modelo de Bloco
      ref: "Bloco", // Nome do modelo de Bloco
      required: true,
    },
    proprietario: { 
      type: String, 
      required: function() { return this.tipo === 'residencial'; } // Só obrigatório se a unidade for do tipo 'residencial'
    },
    moradores: [{
      type: String,
      required: function() { return this.tipo === 'residencial'; } // Só obrigatório se a unidade for do tipo 'residencial'
    }],
    descricao: {
      type: String, 
      required: false // A descrição é opcional, mas pode ser usada para especificar detalhes como "piscina", "salão de festas", etc.
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Unidade", UnidadeSchema);
