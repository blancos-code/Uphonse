const BaseRepository = require('./BaseRepository');
const Commande = require('../models/commande');

class CommandeRepository extends BaseRepository {
    constructor() {
        super(Commande);
    }
}

module.exports = {
    commandeRepository: new CommandeRepository()
};