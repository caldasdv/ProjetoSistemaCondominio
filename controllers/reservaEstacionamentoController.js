const ReservaEstacionamento = require("../models/reserva_estacionamento");

// Criar uma nova reserva de estacionamento
module.exports.store = async (req, res) => {
    try {
        const { unidade, vaga, data_reserva, hora_inicio, hora_fim } = req.body;

        // Verificar se a vaga já está reservada para a data e horário informados
        const reservaExistente = await ReservaEstacionamento.findOne({
            vaga,
            data_reserva,
            $or: [
                {
                    hora_inicio: { $lt: hora_fim },
                    hora_fim: { $gt: hora_inicio },
                },
            ],
        });

        if (reservaExistente) {
            return res
                .status(400)
                .json({ error: "Vaga já reservada para este período" });
        }

        const reserva = new ReservaEstacionamento({
            unidade,
            vaga,
            data_reserva,
            hora_inicio,
            hora_fim,
        });

        await reserva.save();
        res.status(201).json(reserva);
    } catch (error) {
        res.status(400).json({
            error: "Erro ao criar reserva de estacionamento",
        });
    }
};

// Listar todas as reservas de estacionamento
module.exports.show = async (req, res) => {
    try {
        const reservas = await ReservaEstacionamento.find().populate(
            "unidade",
            "numero bloco proprietario",
        );
        res.json(reservas);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar reservas de estacionamento",
        });
    }
};

// Buscar uma reserva de estacionamento por ID
module.exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await ReservaEstacionamento.findById(id).populate(
            "unidade",
            "numero bloco proprietario",
        );
        if (!reserva)
            return res.status(404).json({ error: "Reserva não encontrada" });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar reserva de estacionamento",
        });
    }
};

// Atualizar uma reserva de estacionamento
module.exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await ReservaEstacionamento.findByIdAndUpdate(
            id,
            req.body,
            { new: true },
        );
        if (!reserva)
            return res.status(404).json({ error: "Reserva não encontrada" });
        res.json(reserva);
    } catch (error) {
        res.status(400).json({
            error: "Erro ao atualizar reserva de estacionamento",
        });
    }
};

// Deletar uma reserva de estacionamento
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await ReservaEstacionamento.findByIdAndDelete(id);
        if (!reserva)
            return res.status(404).json({ error: "Reserva não encontrada" });
        res.json({ message: "Reserva deletada com sucesso" });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao deletar reserva de estacionamento",
        });
    }
};
