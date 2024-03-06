const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nom: {
        type: String,
        default: ''
    },
    prenom: {
        type: String,
        default: ''
    },
    telephone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    adresse: {
        type: String,
        default: ''
    },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
