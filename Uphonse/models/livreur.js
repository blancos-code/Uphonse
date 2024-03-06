const mongoose = require('mongoose');

const livreurSchema = new mongoose.Schema({
    vehicule: String,
    adresse: String,
    localisable: Boolean,
    location: {
        date_time: Date,
        coordinates: String,
    }
});

const Livreur = mongoose.model('livreurs', livreurSchema);

module.exports = Livreur;
