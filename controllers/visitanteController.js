const Visitante = require("../models/visitante");

// Adicionar um novo visitante
module.exports.store = async (req, res) => {
    try {
        const {
            nome,
            unidade_visitada,
            data_visita,
            hora_entrada,
            hora_saida,
            documento_identidade,
        } = req.body;

        const visitante = new Visitante({
            nome,
            unidade_visitada,
            data_visita,
            hora_entrada,
            hora_saida,
            documento_identidade,
            status: "pendente",
        });

        await visitante.save();
        res.status(201).json(visitante);
    } catch (error) {
        res.status(400).json({ error: "Erro ao adicionar visitante" });
    }
};

// Listar todos os visitantes registrados
module.exports.show = async (req, res) => {
    try {
        const visitantes = await Visitante.find().populate(
            "unidade_visitada",
            "numero bloco proprietario",
        );
        res.json(visitantes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar visitantes" });
    }
};

// Buscar um visitante específico por ID
module.exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const visitante = await Visitante.findById(id).populate(
            "unidade_visitada",
            "numero bloco proprietario",
        );
        if (!visitante)
            return res.status(404).json({ error: "Visitante não encontrado" });
        res.json(visitante);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar visitante" });
    }
};

// Atualizar status de um visitante (autorizado, finalizado)
module.exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const visitante = await Visitante.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!visitante)
            return res.status(404).json({ error: "Visitante não encontrado" });
        res.json(visitante);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar visitante" });
    }
};

// Deletar um visitante
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const visitante = await Visitante.findByIdAndDelete(id);
        if (!visitante)
            return res.status(404).json({ error: "Visitante não encontrado" });
        res.json({ message: "Visitante deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar visitante" });
    }
};
