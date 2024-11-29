const Financeiro = require('../models/financeiro');

module.exports = {
    // Lista todas as movimentações financeiras
    async show(req, res) {
        try {
            const movimentacoes = await Financeiro.find();
            return res.json(movimentacoes);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao listar movimentações financeiras' });
        }
    },

    // Busca uma movimentação financeira por ID
    async index(req, res) {
        try {
            const { id } = req.params;
            const movimentacao = await Financeiro.findById(id);
            if (!movimentacao) return res.status(404).json({ error: 'Movimentação financeira não encontrada' });
            return res.json(movimentacao);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar movimentação financeira' });
        }
    },

    // Cria uma nova movimentação financeira
    async store(req, res) {
        try {
            const movimentacao = await Financeiro.create(req.body);
            return res.status(201).json(movimentacao);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao criar movimentação financeira' });
        }
    },

    // Atualiza uma movimentação financeira existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const movimentacao = await Financeiro.findByIdAndUpdate(id, req.body, { new: true });
            if (!movimentacao) return res.status(404).json({ error: 'Movimentação financeira não encontrada' });
            return res.json(movimentacao);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao atualizar movimentação financeira' });
        }
    },

    // Deleta uma movimentação financeira
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const movimentacao = await Financeiro.findByIdAndDelete(id);
            if (!movimentacao) return res.status(404).json({ error: 'Movimentação financeira não encontrada' });
            return res.json({ message: 'Movimentação financeira deletada com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao deletar movimentação financeira' });
        }
    },
};
