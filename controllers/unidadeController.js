const Unidade = require("../models/unidade");

// Lista todas as unidades
module.exports.show = async (req, res) => {
    try {
        const unidades = await Unidade.find();
        res.json(unidades);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar unidades" });
    }
};

// Busca uma unidade por ID
module.exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const unidade = await Unidade.findById(id);
        if (!unidade) {
            return res.status(404).json({ error: "Unidade não encontrada" });
        }
        res.json(unidade);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar unidade" });
    }
};

// Cria uma nova unidade
module.exports.store = async (req, res) => {
    try {
        const novaUnidade = new Unidade(req.body);
        await novaUnidade.save();
        res.status(201).json(novaUnidade);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar unidade" });
    }
};

// Atualiza uma unidade existente
module.exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadeAtualizada = await Unidade.findByIdAndUpdate(
            id,
            req.body,
            { new: true },
        );
        if (!unidadeAtualizada) {
            return res.status(404).json({ error: "Unidade não encontrada" });
        }
        res.json(unidadeAtualizada);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar unidade" });
    }
};

// Deleta uma unidade
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadeDeletada = await Unidade.findByIdAndDelete(id);
        if (!unidadeDeletada) {
            return res.status(404).json({ error: "Unidade não encontrada" });
        }
        res.json({ message: "Unidade deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar unidade" });
    }
};
