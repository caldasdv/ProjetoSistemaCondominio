const Aviso = require("../models/aviso");

// Lista todos os avisos
module.exports.show = async (req, res) => {
    try {
        const avisos = await Aviso.find().populate("bloco"); // Preenche a referência do bloco
        res.json(avisos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar avisos" });
    }
};

// Cria um novo aviso
module.exports.store = async (req, res) => {
    const { titulo, descricao, destinatario, bloco } = req.body;
    try {
        const aviso = new Aviso({
            titulo,
            descricao,
            destinatario,
            bloco, // Bloco agora é um ObjectId de um Bloco
        });
        await aviso.save();
        res.status(201).json(aviso);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar aviso" });
    }
};

// Atualiza um aviso
module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, destinatario, bloco } = req.body;
    try {
        const aviso = await Aviso.findByIdAndUpdate(
            id,
            { titulo, descricao, destinatario, bloco },
            { new: true },
        );
        if (!aviso) {
            return res.status(404).json({ error: "Aviso não encontrado" });
        }
        res.json(aviso);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar aviso" });
    }
};

// Deleta um aviso
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const aviso = await Aviso.findByIdAndDelete(id);
        if (!aviso) {
            return res.status(404).json({ error: "Aviso não encontrado" });
        }
        res.json({ message: "Aviso deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar aviso" });
    }
};
