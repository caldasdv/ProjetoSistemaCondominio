const Encomenda = require("../models/encomenda");

// Lista todas as encomendas
module.exports.show = async (req, res) => {
    try {
        const encomendas = await Encomenda.find().populate("bloco"); // Popula o bloco com dados do modelo Bloco
        res.json(encomendas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar encomendas" });
    }
};

// Busca uma encomenda por ID
module.exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const encomenda = await Encomenda.findById(id).populate("bloco"); // Popula o bloco
        if (!encomenda) {
            return res.status(404).json({ error: "Encomenda não encontrada" });
        }
        res.json(encomenda);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar encomenda" });
    }
};

// Cria uma nova encomenda
module.exports.store = async (req, res) => {
    try {
        const { cliente, endereco, itens, bloco } = req.body;

        // Calcular o valor total da encomenda
        const valorTotal = itens.reduce(
            (total, item) => total + item.quantidade * item.preco,
            0,
        );

        const encomenda = new Encomenda({
            cliente,
            endereco,
            itens,
            valorTotal,
            bloco, // Inclui o ID do bloco
        });

        await encomenda.save();
        res.status(201).json(encomenda);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar encomenda" });
    }
};

// Atualiza uma encomenda existente
module.exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const encomenda = await Encomenda.findByIdAndUpdate(id, req.body, {
            new: true,
        }).populate("bloco"); // Popula o bloco

        if (!encomenda) {
            return res.status(404).json({ error: "Encomenda não encontrada" });
        }
        res.json(encomenda);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar encomenda" });
    }
};

// Deleta uma encomenda
module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const encomenda = await Encomenda.findByIdAndDelete(id);
        if (!encomenda) {
            return res.status(404).json({ error: "Encomenda não encontrada" });
        }
        res.json({ message: "Encomenda deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar encomenda" });
    }
};
