const Reclamacao = require('../models/reclamacao');

// Lista todas as reclamações
module.exports.show = async (req, res) => {
    try {
        const reclamacoes = await Reclamacao.find();
        res.json(reclamacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar reclamações' });
    }
};

// Busca uma reclamação por ID
module.exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const reclamacao = await Reclamacao.findById(id);
        if (!reclamacao) {
            return res.status(404).json({ error: 'Reclamação não encontrada' });
        }
        res.json(reclamacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar reclamação' });
    }
};

// Cria uma nova reclamação
module.exports.store = async (req, res) => {
    const { titulo, descricao, tipo, unidade, usuario } = req.body;
    try {
        const reclamacao = new Reclamacao({
            titulo,
            descricao,
            tipo,
            unidade,
            usuario,
        });
        await reclamacao.save();
        res.status(201).json(reclamacao);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar reclamação' });
    }
};

// Atualiza uma reclamação existente
module.exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const reclamacao = await Reclamacao.findByIdAndUpdate(id, req.body, { new: true });
        if (!reclamacao) {
            return res.status(404).json({ error: 'Reclamação não encontrada' });
        }
        res.json(reclamacao);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar reclamação' });
    }
};

// Deleta uma reclamação
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const reclamacao = await Reclamacao.findByIdAndDelete(id);
        if (!reclamacao) {
            return res.status(404).json({ error: 'Reclamação não encontrada' });
        }
        res.json({ message: 'Reclamação deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar reclamação' });
    }
};
