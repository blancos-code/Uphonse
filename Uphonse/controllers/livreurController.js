const { livreurRepository } = require("../repositories/LivreurRepository");

async function findAll(req, res, next) {
    try {
        const livreurs = await livreurRepository.findAll(req.query);
        res.json(livreurs);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        if (!req.query.localisable) {
            req.query.location = {
                date_time : new Date(),
                coordinates: '',
            }
        }
        const updatedLivreur = await livreurRepository.updateOne(req);
        if (!updatedLivreur) {
            return res.status(404).json({ error: 'Livreur non trouvé' });
        }
        res.json(updatedLivreur);
    } catch (error) {
        next(error);
    }
}

async function findOneById(req, res, next) {
    try {
        const livreur = await livreurRepository.findOne({ _id: req.params.id });
        if (!livreur) {
            return res.status(404).json({ error: 'Livreur non trouvé' });
        }
        res.json(livreur);
    } catch (error) {
        next(error);
    }
}

async function deleteLivreur(req, res, next) {
    try {
        const deletedLivreur = await livreurRepository.deleteOne({ _id: req.params.id });
        if (!deletedLivreur) {
            return res.status(404).json({ error: 'Livreur non trouvé' });
        }
        res.json(deletedLivreur);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const livreur = await livreurRepository.create(req.body);
        res.status(201).json(livreur);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    findAll,
    findOneById,
    update,
    deleteLivreur,
};