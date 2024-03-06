const mongoose = require('mongoose');

const connect = (uri) => {
    mongoose.connect(uri);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données:'));
    db.once('open', () => {
        console.log('Connexion à la base de données réussie');
    });
};

module.exports = {
    connect,
};