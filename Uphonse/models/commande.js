const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    id_client: String,
    id_fournisseur: String,
    id_livreur: String,
    adresse_depart: String,
    adresse_fin: String,
    produit: String,
    date_time: mongoose.Schema.Types.Date,
});

const Commande = mongoose.model('commandes', commandeSchema);

module.exports = Commande;
