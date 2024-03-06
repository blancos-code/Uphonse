const { clientRepository } = require("../repositories/ClientRepository");

async function findAll(req, res, next) {
    try {
        const clients = await clientRepository.findAll(req.query);
        res.json(clients);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const updatedClient = await clientRepository.updateOne(req);
        if (!updatedClient) {
            return res.status(404).json({ error: 'Client non trouvé' });
        }
        res.json(updatedClient);
    } catch (error) {
        next(error);
    }
}

async function findOneById(req, res, next) {
    try {
        const client = await clientRepository.findOne({ _id: req.params.id });
        if (!client) {
            return res.status(404).json({ error: 'Client non trouvé' });
        }
        res.json(client);
    } catch (error) {
        next(error);
    }
}

async function deleteClient(req, res, next) {
    try {
        const deletedClient = await clientRepository.deleteOne({ _id: req.params.id });
        if (!deletedClient) {
            return res.status(404).json({ error: 'Client non trouvé' });
        }
        res.json(deletedClient);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const client = await clientRepository.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    findAll,
    findOneById,
    update,
    deleteClient,
};