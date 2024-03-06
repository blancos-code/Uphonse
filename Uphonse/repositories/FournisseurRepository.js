const BaseRepository = require('./BaseRepository');
const Fournisseur = require('../models/fournisseur');

class FournisseurRepository extends BaseRepository {
    constructor() {
        super(Fournisseur);
    }
}

module.exports = {
    fournisseurRepository: new FournisseurRepository()
};