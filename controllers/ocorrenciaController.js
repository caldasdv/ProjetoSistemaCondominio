const Ocorrencia = require('../models/ocorrencia');

module.exports = {
    // Lista todas as ocorrências
    async show(req, res) {
        try {
            const ocorrencias = await Ocorrencia.find().populate('unidadeId');
            return res.json(ocorrencias);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao listar ocorrências' });
        }
    },

    // Busca uma ocorrência por ID
    async index(req, res) {
        try {
            const { id } = req.params;
            const ocorrencia = await Ocorrencia.findById(id).populate('unidadeId');
            if (!ocorrencia) return res.status(404).json({ error: 'Ocorrência não encontrada' });
            return res.json(ocorrencia);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar ocorrência' });
        }
    },

    // Cria uma nova ocorrência
    async store(req, res) {
        try {
            const ocorrencia = await Ocorrencia.create(req.body);
            return res.status(201).json(ocorrencia);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao criar ocorrência' });
        }
    },

    // Atualiza uma ocorrência existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const ocorrencia = await Ocorrencia.findByIdAndUpdate(id, req.body, { new: true });
            if (!ocorrencia) return res.status(404).json({ error: 'Ocorrência não encontrada' });
            return res.json(ocorrencia);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao atualizar ocorrência' });
        }
    },

    // Deleta uma ocorrência
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const ocorrencia = await Ocorrencia.findByIdAndDelete(id);
            if (!ocorrencia) return res.status(404).json({ error: 'Ocorrência não encontrada' });
            return res.json({ message: 'Ocorrência deletada com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao deletar ocorrência' });
        }
    },
};
