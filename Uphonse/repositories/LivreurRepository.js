const BaseRepository = require('./BaseRepository');
const Livreur = require('../models/livreur');

class LivreurRepository extends BaseRepository {
    constructor() {
        super(Livreur);
    }
}

module.exports = {
    livreurRepository: new LivreurRepository()
};