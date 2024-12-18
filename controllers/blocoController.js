const Bloco = require('../models/bloco');

// Lista todos os blocos
module.exports.show = async (req, res) => {
    try {
        const blocos = await Bloco.find();
        res.json(blocos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar blocos' });
    }
};

// Cria um novo bloco
module.exports.store = async (req, res) => {
    const { nome, descricao } = req.body;
    try {
        const bloco = new Bloco({
            nome,
            descricao,
        });
        await bloco.save();
        res.status(201).json(bloco);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar bloco' });
    }
};

// Atualiza as informações de um bloco
module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    try {
        const bloco = await Bloco.findByIdAndUpdate(id, { nome, descricao }, { new: true });
        if (!bloco) {
            return res.status(404).json({ error: 'Bloco não encontrado' });
        }
        res.json(bloco);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar bloco' });
    }
};

// Deleta um bloco
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const bloco = await Bloco.findByIdAndDelete(id);
        if (!bloco) {
            return res.status(404).json({ error: 'Bloco não encontrado' });
        }
        res.json({ message: 'Bloco deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar bloco' });
    }
};
