const request = require('supertest');
const app = require('../app');

describe('GET /api/commande/all', () => {
    it('Récupère la liste des commandes"', (done) => {
        request(app)
            .get('/api/commande/all')
            .expect(200, done);
    });
});

describe('POST /api/commande/', () => {
    it('Créé une commande"', (done) => {
        const commandeData = {
            id_client: '2828893',
            id_fournisseur: '987538953',
            id_livreur: '90387438',
            adresse_depart: 'PPoopopo',
            adresse_fin: 'Gou rrr jizh',
            produit: 'Carottes',
        };

        request(app)
            .post('/api/commande/')
            .send(commandeData)
            .expect(201, done)
    });
});


let commandeTest = null;
describe('GET /api/commande/all?filtres', () => {
    it('Récupère la liste des commandes avec filtres"', (done) => {
        request(app)
            .get('/api/commande/all')
            .query({ produit: 'Carottes'})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                commandeTest = res.body[0];
                done();
            });
    });
});

describe('GET /api/commande/:id', () => {
    it('Récupère un commande"', (done) => {
        request(app)
            .get('/api/commande/' + commandeTest._id)
            .expect(200, done);
    });
});

describe('PUT /api/commande/', () => {
    it('Update un commande"', (done) => {
        request(app)
            .put('/api/commande/')
            .query({
                _id: commandeTest._id ,
                id_client: '2828893',
                id_fournisseur: '987538953',
                id_livreur: '90387438',
                adresse_depart: 'aa',
                adresse_fin: 'zz',
                produit: 'Carottes',
                date_time: new Date(),
            })
            .expect(200, done);
    });
});


describe('DELETE /api/commande/:id', () => {
    it('Supprime un commande', (done) => {
        request(app)
            .delete('/api/commande/' + commandeTest._id)
            .expect(200, done);
    });
});


