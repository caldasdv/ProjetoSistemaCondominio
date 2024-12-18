const Documento = require("../models/documento");

// Criar um novo documento ou comunicado
module.exports.store = async (req, res) => {
  try {
    const { titulo, descricao, tipo, arquivo } = req.body;

    const documento = new Documento({
      titulo,
      descricao,
      tipo,
      arquivo,
    });

    await documento.save();
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar documento ou comunicado" });
  }
};

// Listar todos os documentos e comunicados
module.exports.show = async (req, res) => {
  try {
    const documentos = await Documento.find();
    res.json(documentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar documentos" });
  }
};

// Buscar um documento ou comunicado por ID
module.exports.index = async (req, res) => {
  const { id } = req.params;
  try {
    const documento = await Documento.findById(id);
    if (!documento)
      return res.status(404).json({ error: "Documento não encontrado" });
    res.json(documento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar documento" });
  }
};

// Atualizar um documento ou comunicado
module.exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const documento = await Documento.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!documento)
      return res.status(404).json({ error: "Documento não encontrado" });
    res.json(documento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar documento" });
  }
};

// Deletar um documento ou comunicado
module.exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const documento = await Documento.findByIdAndDelete(id);
    if (!documento)
      return res.status(404).json({ error: "Documento não encontrado" });
    res.json({ message: "Documento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar documento" });
  }
};
