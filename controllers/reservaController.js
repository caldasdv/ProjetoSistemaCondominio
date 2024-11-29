const Reserva = require('../models/reserva');

module.exports = {
    // Lista todas as reservas
    async show(req, res) {
        try {
            const reservas = await Reserva.find().populate('unidadeId');
            return res.json(reservas);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao listar reservas' });
        }
    },

    // Busca uma reserva por ID
    async index(req, res) {
        try {
            const { id } = req.params;
            const reserva = await Reserva.findById(id).populate('unidadeId');
            if (!reserva) return res.status(404).json({ error: 'Reserva não encontrada' });
            return res.json(reserva);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar reserva' });
        }
    },

    // Cria uma nova reserva
    async store(req, res) {
        try {
            const reserva = await Reserva.create(req.body);
            return res.status(201).json(reserva);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao criar reserva' });
        }
    },

    // Atualiza uma reserva existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const reserva = await Reserva.findByIdAndUpdate(id, req.body, { new: true });
            if (!reserva) return res.status(404).json({ error: 'Reserva não encontrada' });
            return res.json(reserva);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao atualizar reserva' });
        }
    },

    // Deleta uma reserva
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const reserva = await Reserva.findByIdAndDelete(id);
            if (!reserva) return res.status(404).json({ error: 'Reserva não encontrada' });
            return res.json({ message: 'Reserva deletada com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao deletar reserva' });
        }
    },
};
