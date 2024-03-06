const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
    nom: {
        type: String,
        default: 'John'
    },
    prenom: {
        type: String,
        default: 'Doe'
    },
    telephone: {
        type: String,
        default: '0606060606'
    },
    email: {
        type: String,
        default: 'jeanne@oskour.fr'
    },
    adresse: {
        type: String,
        default: '7 rue du panda'
    },
});

const Fournisseur = mongoose.model('fournisseurs', fournisseurSchema);

module.exports = Fournisseur;
