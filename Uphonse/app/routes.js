const clientsRouter = require('../routes/clients');
const fournisseursRouter = require('../routes/fournisseurs');
const commandesRouter = require('../routes/commandes');
const livreursRouter = require('../routes/livreurs');

const initRoutes = (app) => {
    app.use('/api/client/', clientsRouter);
    app.use('/api/fournisseur/', fournisseursRouter);
    app.use('/api/commande/', commandesRouter);
    app.use('/api/livreur/', livreursRouter);
};

module.exports = initRoutes;