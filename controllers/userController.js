const User = require('../models/user');

module.exports = {
    async show(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    },

    async index(req, res) {
        try {
            const { email } = req.query;
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            return res.json(user);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    async store(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao criar usuário' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, req.body, { new: true });
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            return res.json(user);
        } catch (err) {
            return res.status(400).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            return res.json({ message: 'Usuário deletado com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    },
};
