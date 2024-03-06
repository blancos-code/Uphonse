const { commandeRepository } = require("../repositories/CommandeRepository");

async function findAll(req, res, next) {
    try {
        const commandes = await commandeRepository.findAll(req.query);
        res.json(commandes);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const updatedCommande = await commandeRepository.updateOne(req);
        if (!updatedCommande) {
            return res.status(404).json({ error: 'Commande non trouvé' });
        }
        res.json(updatedCommande);
    } catch (error) {
        next(error);
    }
}

async function findOneById(req, res, next) {
    try {
        const commande = await commandeRepository.findOne({ _id: req.params.id });
        if (!commande) {
            return res.status(404).json({ error: 'Commande non trouvé' });
        }
        res.json(commande);
    } catch (error) {
        next(error);
    }
}

async function deleteCommande(req, res, next) {
    try {
        const deletedCommande = await commandeRepository.deleteOne({ _id: req.params.id });
        if (!deletedCommande) {
            return res.status(404).json({ error: 'Commande non trouvé' });
        }
        res.json(deletedCommande);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const commande = await commandeRepository.create(req.body);
        res.status(201).json(commande);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    findAll,
    findOneById,
    update,
    deleteCommande,
};