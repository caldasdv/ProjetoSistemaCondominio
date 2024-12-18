const TaxaExtra = require("../models/taxa_extra");

// Lista todas as taxas extras
async function show(req, res) {
    try {
        const taxas = await TaxaExtra.find();
        return res.json(taxas);
    } catch (err) {
        return res.status(500).json({ error: "Erro ao listar taxas extras" });
    }
}

// Busca uma taxa extra por ID
async function index(req, res) {
    try {
        const { id } = req.params;
        const taxa = await TaxaExtra.findById(id);
        if (!taxa)
            return res.status(404).json({ error: "Taxa extra não encontrada" });
        return res.json(taxa);
    } catch (err) {
        return res.status(500).json({ error: "Erro ao buscar taxa extra" });
    }
}

// Cria uma nova taxa extra
async function store(req, res) {
    try {
        const taxa = await TaxaExtra.create(req.body);
        return res.status(201).json(taxa);
    } catch (err) {
        return res.status(500).json({ error: "Erro ao criar taxa extra" });
    }
}

// Atualiza uma taxa extra
async function update(req, res) {
    try {
        const { id } = req.params;
        const taxa = await TaxaExtra.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!taxa)
            return res.status(404).json({ error: "Taxa extra não encontrada" });
        return res.json(taxa);
    } catch (err) {
        return res.status(500).json({ error: "Erro ao atualizar taxa extra" });
    }
}

// Deleta uma taxa extra
async function destroy(req, res) {
    try {
        const { id } = req.params;
        const taxa = await TaxaExtra.findByIdAndDelete(id);
        if (!taxa)
            return res.status(404).json({ error: "Taxa extra não encontrada" });
        return res.json({ message: "Taxa extra deletada com sucesso" });
    } catch (err) {
        return res.status(500).json({ error: "Erro ao deletar taxa extra" });
    }
}

module.exports = {
    show,
    index,
    store,
    update,
    destroy,
};
