const Unidade = require('../models/unidade');

module.exports = {
    async show(req, res) {
        try {
            const unidades = await Unidade.find();
            return res.json(unidades);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao listar unidades' });
        }
    },

    async index(req, res) {
        try {
            const { id } = req.params;
            const unidade = await Unidade.findById(id);
            if (!unidade) return res.status(404).json({ error: 'Unidade não encontrada' });
            return res.json(unidade);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar unidade' });
        }
    },

    async store(req, res) {
        try {
            const unidade = await Unidade.create(req.body);
            return res.status(201).json(unidade);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao criar unidade' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const unidade = await Unidade.findByIdAndUpdate(id, req.body, { new: true });
            if (!unidade) return res.status(404).json({ error: 'Unidade não encontrada' });
            return res.json(unidade);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao atualizar unidade' });
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const unidade = await Unidade.findByIdAndDelete(id);
            if (!unidade) return res.status(404).json({ error: 'Unidade não encontrada' });
            return res.json({ message: 'Unidade deletada com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao deletar unidade' });
        }
    },
};
