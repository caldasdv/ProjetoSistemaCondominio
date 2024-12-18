const Financeiro = require("../models/financeiro");
const Unidade = require("../models/unidade");
const TaxaExtra = require("../models/taxa_extra");
const Reserva = require("../models/reserva");
const Conta = require("../models/conta");

// Lista todas as movimentações financeiras
async function show(req, res) {
    try {
        const { tipo, categoria, page = 1, limit = 10 } = req.query;
        const query = {};

        if (tipo) query.tipo = tipo;
        if (categoria) query.categoria = categoria;

        const movimentacoes = await Financeiro.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        return res.json(movimentacoes);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Erro ao listar movimentações financeiras" });
    }
}

// Busca movimentação financeira por ID
async function index(req, res) {
    try {
        const { id } = req.params;
        const movimentacao = await Financeiro.findById(id).populate(
            "unidade taxa_extra reserva conta",
        ); // Popula as referências

        if (!movimentacao) {
            return res
                .status(404)
                .json({ error: "Movimentação financeira não encontrada" });
        }

        return res.json(movimentacao);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Erro ao buscar movimentação financeira" });
    }
}

// Cria uma nova movimentação financeira
async function store(req, res) {
    try {
        const {
            tipo,
            descricao,
            valor,
            data,
            categoria,
            unidade,
            taxa_extra,
            reserva,
            conta,
        } = req.body;

        // Validação básica
        if (!tipo || !descricao || !valor || !data || !categoria) {
            return res
                .status(400)
                .json({ error: "Campos obrigatórios ausentes" });
        }

        // Verifica se as referências existem
        if (categoria === "reserva" && !reserva) {
            return res.status(400).json({
                error: "Reserva é obrigatória para categoria reserva",
            });
        }

        if (categoria === "taxa_extra" && !taxa_extra) {
            return res.status(400).json({
                error: "Taxa extra é obrigatória para categoria taxa_extra",
            });
        }

        if (categoria === "conta" && !conta) {
            return res
                .status(400)
                .json({ error: "Conta é obrigatória para categoria conta" });
        }

        const movimentacao = await Financeiro.create({
            tipo,
            descricao,
            valor,
            data,
            categoria,
            unidade,
            taxa_extra,
            reserva,
            conta,
        });

        return res.status(201).json(movimentacao);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Erro ao criar movimentação financeira" });
    }
}

// Atualiza uma movimentação financeira
async function update(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const movimentacao = await Financeiro.findByIdAndUpdate(
            id,
            updateData,
            { new: true },
        ).populate("unidade taxa_extra reserva conta");

        if (!movimentacao) {
            return res
                .status(404)
                .json({ error: "Movimentação financeira não encontrada" });
        }

        return res.json(movimentacao);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Erro ao atualizar movimentação financeira" });
    }
}

// Deleta uma movimentação financeira
async function destroy(req, res) {
    try {
        const { id } = req.params;
        const movimentacao = await Financeiro.findByIdAndDelete(id);

        if (!movimentacao) {
            return res
                .status(404)
                .json({ error: "Movimentação financeira não encontrada" });
        }

        return res.json({
            message: "Movimentação financeira deletada com sucesso",
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Erro ao deletar movimentação financeira" });
    }
}

module.exports = {
    show,
    index,
    store,
    update,
    destroy,
};
