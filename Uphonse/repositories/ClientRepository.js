const BaseRepository = require('./BaseRepository');
const Client = require('../models/client');

class ClientRepository extends BaseRepository {
    constructor() {
        super(Client);
    }
}

module.exports = {
    clientRepository: new ClientRepository()
};