const { fournisseurRepository } = require("../repositories/FournisseurRepository");

async function findAll(req, res, next) {
    try {
        const fournisseurs = await fournisseurRepository.findAll(req.query);
        res.json(fournisseurs);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const updatedFournisseur = await fournisseurRepository.updateOne(req);
        if (!updatedFournisseur) {
            return res.status(404).json({ error: 'Fournisseur non trouvé' });
        }
        res.json(updatedFournisseur);
    } catch (error) {
        next(error);
    }
}

async function findOneById(req, res, next) {
    try {
        const fournisseur = await fournisseurRepository.findOne({ _id: req.params.id });
        if (!fournisseur) {
            return res.status(404).json({ error: 'Fournisseur non trouvé' });
        }
        res.json(fournisseur);
    } catch (error) {
        next(error);
    }
}

async function deleteFournisseur(req, res, next) {
    try {
        const deletedFournisseur = await fournisseurRepository.deleteOne({ _id: req.params.id });
        if (!deletedFournisseur) {
            return res.status(404).json({ error: 'Fournisseur non trouvé' });
        }
        res.json(deletedFournisseur);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const fournisseur = await fournisseurRepository.create(req.body);
        res.status(201).json(fournisseur);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    findAll,
    findOneById,
    update,
    deleteFournisseur,
};